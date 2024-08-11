import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ref, onValue, off, remove } from "firebase/database";
import database from "../firebase";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Navigate } from "react-router-dom";
const StaffProfile = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const staffRef = ref(database, "StaffDetails");

    const handleData = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const staffRows = Object.keys(data).map((id) => ({
          id, // Unique row id
          name: data[id].name,
          department: data[id].department,
          gender: data[id].gender,
          email: data[id].email,
          contact: data[id].contact,
        }));
        setRows(staffRows);
      } else {
        setRows([]);
      }
    };

    onValue(staffRef, handleData, {
      onlyOnce: false, // Set to false if you want continuous updates
    });

    return () => {
      off(staffRef, "value", handleData);
    };
  }, []);

  const handleDelete = (id) => {
    const staffRef = ref(database, `StaffDetails/${id}`);
    remove(staffRef).then(() => {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ height: 400, width: "80%" }}>
        <DataGrid
          rows={rows}
          columns={[
            { field: "name", headerName: "Full name", width: 160 },
            { field: "department", headerName: "Department", width: 160 },
            { field: "gender", headerName: "Gender", width: 90 },
            { field: "email", headerName: "Gmail", width: 200 },
            {
              field: "contact",
              headerName: "Contact",
              type: "number",
              width: 160,
            },
            {
              field: "action",
              headerName: "Action",
              width: 160,
              renderCell: (params) => (
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }} // Center the button vertically
                >
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(params.row.id)}
                    size="small"
                    sx={{ minWidth: 50 }}
                  >
                    Delete
                  </Button>
                </Stack>
              ),
            },
          ]}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f0f0f0", // Optional: Change header background color
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "black", // Set header text color to dark black
              fontWeight: "bold", // Make the header text bold
            },
          }}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "40%",
          }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => Navigate("/confirmation")}
          >
            Send
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default StaffProfile;
