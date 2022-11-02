import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import imag from "../assets/monnerNotificationImage.png";
export default function JsPdf() {
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt");

    doc.addFont("helvetica", "normal");

    //table
    autoTable(doc, {
      //   head: [["Name", "Email", "Country"]],
      body: [
        ["Total Number of Users:", 10],
        ["Total number of Bookings:", 17],
        // ...
      ],
    });
    //finish
    var img = new Image();
    img.src = imag;
    doc.addImage(img, "png", 270, 500, 50, 50);
    doc.save("demo.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF} type="primary">
        Download PDF
      </button>
    </div>
  );
}
