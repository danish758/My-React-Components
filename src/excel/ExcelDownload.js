import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

const ExcelDownload = () => {
  const data = [
    {
      id: 231,
      first_name: "Umair Khanss",
      last_name: "",
      email: "ukhan2452@gmail.com",
      type: "SS",
      bookings: 3,
      status: true,
      reference_id: "MNR0231-2022",
      level: 1,
      earning: 0,
    },
    {
      id: 227,
      first_name: "Test Test",
      last_name: "",
      email: "permklmy@gmail.com",
      type: "SS",
      bookings: 0,
      status: true,
      reference_id: "MNR0227-2022",
      level: 1,
      earning: 0,
    },
    {
      id: 226,
      first_name: "John Doe",
      last_name: "",
      email: "permissionsprocess@gmail.com",
      type: "SS",
      bookings: 0,
      status: true,
      reference_id: "MNR0226-2022",
      level: 1,
      earning: 0,
    },
    {
      id: 225,
      first_name: "Ali Raza",
      last_name: "",
      email: "ali.raza@spyresync.com",
      type: "SS",
      bookings: 0,
      status: true,
      reference_id: "MNR0225-2022",
      level: 1,
      earning: 0,
    },
    {
      id: 221,
      first_name: "Test Wallet",
      last_name: "",
      email: "spyresync.testa@gmail.com",
      type: "SS",
      bookings: 0,
      status: true,
      reference_id: "MNR0221-2022",
      level: 1,
      earning: 0,
    },
    {
      id: 220,
      first_name: "Lionel D’Cruz",
      last_name: "",
      email: "lioneldcruz21@gmail.com",
      type: "SS/ SP",
      bookings: 0,
      status: true,
      reference_id: "MNR0220-2022",
      level: 1,
      earning: 57424.78772282499,
    },
    {
      id: 219,
      first_name: "Test Account",
      last_name: "",
      email: "spyresynctest1@gmail.com",
      type: "SS/ SP",
      bookings: 10,
      status: true,
      reference_id: "MNR0219-2022",
      level: 1,
      earning: 6675.979852039498,
    },
    {
      id: 217,
      first_name: "Josh Test",
      last_name: "",
      email: "daniyal21@ymail.com",
      type: "SS/ SP",
      bookings: 8,
      status: true,
      reference_id: "MNR0217-2022",
      level: 2,
      earning: 358.7443176805266,
    },
    {
      id: 200,
      first_name: "Daniel Roy",
      last_name: "",
      email: "daniyal.spyresync@gmail.com",
      type: "SS/ SP",
      bookings: 0,
      status: true,
      reference_id: "MNR0200-2022",
      level: 1,
      earning: 1381.8403871726136,
    },
    {
      id: 195,
      first_name: "Haseeb Majid",
      last_name: "",
      email: "haseeb.majid@spyresync.com",
      type: "SS/ SP",
      bookings: 0,
      status: true,
      reference_id: "MNR0195-2022",
      level: null,
      earning: 445.355964507361,
    },
  ];

  const data2 = [];
  data.map((item) => {
    data2.push([item.first_name, item.last_name, item.email]);
  });

  const header = ["Firstname", "Lastname", "Email"];
  function handleDownloadExcel() {
    downloadExcel({
      fileName: "react-export-table-to-excel -> downloadExcel method",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        // accept two different data structures
        body: data2,
      },
    });
  }
  return (
    <div>
      ExcelDownload
      <button onClick={handleDownloadExcel}>download excel</button>
    </div>
  );
};

export default ExcelDownload;
