import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, department, gender, gmail, contact) {
  return { name, department, gender, gmail, contact };
}

const rows = []; // get the input from the mutiple select and fetch the data from the database **********read this rahul

export default function StaffConfirmtionPage() {
  return (
    <TableContainer component={Paper} sx={{ height: "100%" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full name</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Gmail</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.department}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.contact}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Stack
        direction="row"
        spacing={2}
        sx={{ height: "100%", justifyContent: "center" }}
      >
        <Button variant="contained" color="success">
          Submit
        </Button>
      </Stack>
    </TableContainer>
  );
}
