import React, { useRef } from "react";
import { useState } from "react";
import upload from "../assets/upload.png";
import cross from "../assets/cross.png";
const MultiImageUpload = ({
  maxSize,
  accept,
  defaultImages,
  maxFiles,
  onChange,
}) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [previewsArray, setPreviewsArray] = useState([]);
  const ref = useRef();
  const handleChange = (e) => {
    const Files = [e.target.files];
    console.log("FILESinchange", Files);
    const FILES = [];
    Files.map((fileList, ind) => {
      console.log("fileList", typeof fileList);
      const getArray = Object.values(fileList);
      console.log("getArray", getArray);
      getArray?.map((file) => {
        console.log("fileoff", file.size);
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
    console.log("FILESinchange", FILES);
    if ([...files, ...FILES].length + defaultImages.length > maxFiles) {
      setError(`Maximum ${maxFiles} files are allowed`);
      setFiles([...files, ...FILES].slice(0, maxFiles));
    } else {
      setFiles([...files, ...FILES]);
      setError("");
    }

    //Setting Previews
    // console.log("filestotal", files);
    const previews =
      [...files, ...FILES].length > 5
        ? [...files, ...FILES].slice(0, maxFiles)
        : [...files, ...FILES];
    const urlsArray = [];
    previews?.length > 0 &&
      previews.map((file) => {
        console.log("fileghg", file);
        urlsArray.push({
          src: URL.createObjectURL(file?.file),
          typeError: file?.typeError,
          sizeError: file?.sizeError,
          name: file?.name,
        });
        //
      });
    console.log("urlsArray", urlsArray);

    setPreviewsArray(urlsArray?.concat(defaultImages));
    // return [...files, FILES];
    onChange(
      [...files, ...FILES].length > 5
        ? [...files, ...FILES].slice(0, maxFiles)
        : [...files, ...FILES]
    );
  };

  // console.log("array", [1, 2, 3, 4, 5, 6]);
  const handleClick = (e) => {
    ref.current.click();
  };
  const filterFile = (file) => {
    // console.log("file", file);
    const Previews = previewsArray;
    const filtered = Previews.filter((item) => {
      return item?.src !== file.src;
    });
    setPreviewsArray(filtered);
    //Now change the Files Array
    // console.log("first", files);
    const Files = files;
    console.log("firstfilter", Files);
    const filteredFiles = Files.filter((item) => {
      console.log("condition", item);
      return item.name !== file.name;
    });

    console.log("filteredFiles", filteredFiles);
    setFiles([...filteredFiles]);
    onChange([...filteredFiles]);
    if ([...filteredFiles].length <= 5) {
      setError("");
    }
  };

  console.log("files", files);
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
              previewsArray.map((src) => (
                <div>
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
    </div>
  );
};

export default MultiImageUpload;
