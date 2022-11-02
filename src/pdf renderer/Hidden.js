import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport } from "@progress/kendo-react-pdf";

const Hidden = () => {
  const pdfExportComponent = React.useRef(null);
  return (
    <div>
      <div className="example-config">
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={() => {
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
          }}
        >
          Export PDF
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          left: "-1000px",
          top: 0,
        }}
      >
        {/* <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
          <div
            style={{
              width: "500px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              felis libero, lobortis ac rutrum quis, varius a velit. Donec lacus
              erat, cursus sed porta quis, adipiscing et ligula. Duis volutpat,
              sem pharetra accumsan pharetra, mi ligula cursus felis, ac aliquet
              leo diam eget risus. Integer facilisis, justo cursus venenatis
              vehicula, massa nisl tempor sem, in ullamcorper neque mauris in
              orci.
            </p>
            <p>
              Ut orci ligula, varius ac consequat in, rhoncus in dolor. Mauris
              pulvinar molestie accumsan. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Aenean
              velit ligula, pharetra quis aliquam sed, scelerisque sed sapien.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam dui mi, vulputate vitae
              pulvinar ac, condimentum sed eros.
            </p>
          </div>
        </PDFExport> */}
      </div>
    </div>
  );
};

export default Hidden;
