import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination, Skeleton, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

export default function BasicTable({ DATA, isFetching }) {
  console.log("DATA", DATA);
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Paper sx={{ overflowX: isMobile ? "auto" : "unset" }}>
        <Table aria-label="simple table" sx={{ minWidth: "500px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DATA.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {!isFetching ? (
                    row.username
                  ) : (
                    <Skeleton animation="wave" width={"100%"} />
                  )}
                </TableCell>

                <TableCell>
                  {!isFetching ? (
                    row.email
                  ) : (
                    <Skeleton animation="wave" width={"100%"} />
                  )}
                </TableCell>

                <TableCell align="center">
                  {!isFetching ? (
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        background: row?.is_active ? "#4DAB75" : "red",
                        borderRadius: "20px",
                      }}
                    ></div>
                  ) : (
                    <Skeleton animation="wave" width={"100%"} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 90, sortable: false },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     sortable: false,
//     // editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     sortable: false,
//     // editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     sortable: false,
//     // editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function Basic() {
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//     >
//       <Box sx={{ height: "60vh", width: "100%", maxWidth: "50%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           disableSelectionOnClick
//           columnVisibilityModel={false}
//           sx={{
//             "& .MuiDataGrid-cell:focus": {
//               //   color: "primary.main",
//               outline: "none",
//             },
//           }}
//           hideFooter
//           //   hideFooterPagination={true}
//           //   hideFooterSelectedRowCount={true}
//           //   rowsPerPageOptions={[5]}
//           //   checkboxSelection
//           //   disableSelectionOnClick
//           //   experimentalFeatures={{ newEditingApi: true }}
//         />
//       </Box>
//     </div>
//   );
// }
