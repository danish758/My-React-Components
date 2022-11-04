import React, { useRef } from "react";
import { useState } from "react";
import upload from "../assets/upload.png";
import cross from "../assets/cross.png";
import { setSnackbar } from "../snack.service";
import { useDispatch } from "react-redux";
const MultiImageUpload = ({
  maxSize,
  accept,
  defaultImages,
  maxFiles,
  onChange,
}) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const DefaultImgs = [];
  defaultImages?.map((src) => {
    DefaultImgs.push({
      src: src,
      typeError: "",
      sizeError: "",
      name: "",
    });
  });
  const [previewsArray, setPreviewsArray] = useState(DefaultImgs);
  const ref = useRef();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const Files = [e.target.files];
    const FILES = [];
    Files.map((fileList, ind) => {
      const getArray = Object.values(fileList);
      getArray?.map((file) => {
        let typeError = "",
          sizeError = "";

        if (file.type !== accept) {
          typeError = `Invalid format`;
        }
        if (file.size / 1024 / 1024 > maxSize) {
          sizeError = `Size Limit: 2MB `;
        }

        FILES.push({
          file: file,
          typeError: typeError,
          sizeError: sizeError,
          name: file.name,
        });
      });
    });
    if ([...files, ...FILES].length + defaultImages.length > maxFiles) {
      dispatch(
        setSnackbar({
          message: `Maximum ${maxFiles} files are allowed`,
          severity: "error",
        })
      );
      // setError(`Maximum ${maxFiles} files are allowed`);
      setFiles([...files, ...FILES].slice(0, maxFiles));
    } else {
      setFiles([...files, ...FILES]);
      setError("");
    }

    //Setting Previews
    const previews =
      [...files, ...FILES].length > maxFiles
        ? [...files, ...FILES].slice(0, maxFiles)
        : [...files, ...FILES];
    const urlsArray = [];
    previews?.length > 0 &&
      previews.map((file) => {
        urlsArray.push({
          src: URL.createObjectURL(file?.file),
          typeError: file?.typeError,
          sizeError: file?.sizeError,
          name: file?.name,
        });
        //
      });

    setPreviewsArray([...previewsArray, ...urlsArray]);
    // return [...files, FILES];
    onChange(
      [...files, ...FILES].length > maxFiles
        ? [...files, ...FILES].slice(0, maxFiles)
        : [...files, ...FILES]
    );
  };
  console.log("previewsArray", previewsArray);
  const handleClick = (e) => {
    ref.current.click();
  };
  const filterFile = (file) => {
    const Previews = previewsArray;
    const filtered = Previews.filter((item) => {
      return item?.src !== file.src;
    });
    setPreviewsArray(filtered);
    //Now change the Files Array
    const Files = files;
    const filteredFiles = Files.filter((item) => {
      return item.name !== file.name;
    });

    setFiles([...filteredFiles]);
    onChange([...filteredFiles]);
    if ([...filteredFiles].length <= maxFiles) {
      setError("");
    }
  };
  return (
    <div>
      <div
        style={{
          marginTop: "20vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40vw",
            minHeight: "40vh",
            // border: "1px dashed black",
            boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
            padding: "30px",
          }}
        >
          <div
            onClick={handleClick}
            style={{
              width: "auto",
              height: "auto",
              margin: "20px",
              border: "2px dashed gray",
              borderRadius: "10px",
              color: "orange",
              cursor: "pointer",
            }}
          >
            <h3>Upload Files</h3>
            {/* <h5>Click to Upload</h5> */}
            <img src={upload} width="100px" height="100px" />
          </div>
          <input
            ref={ref}
            type="file"
            onChange={(e) => handleChange(e)}
            multiple
            hidden
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {previewsArray.length > 0 &&
              previewsArray.map((src, index) => (
                <div key={index}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={cross}
                      width="20px"
                      height="20px"
                      style={{
                        position: "absolute",
                        right: "-8px",
                        top: "-6px",
                        cursor: "pointer",
                      }}
                      onClick={() => filterFile(src)}
                    />
                    <img
                      src={src?.src}
                      width="100px"
                      height={"100px"}
                      // style={{ padding: "0px 20px" }}
                    />
                  </div>
                  <div style={{ color: "red" }}>{src?.typeError}</div>
                  <div style={{ color: "red" }}>{src?.sizeError}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <div>
        {files?.map((file, ind) => (
          <div key={ind}>{file?.file?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageUpload;