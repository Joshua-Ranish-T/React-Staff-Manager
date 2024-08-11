import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import the Firebase database reference
import database from "../firebase";
import { ref, push } from "firebase/database";

const initialState = {
  name: "",
  email: "",
  gender: "",
  department: "",
  contact: "",
};

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const departmentOptions = [
  { value: "IT", label: "IT" },
  { value: "CSE", label: "CSE" },
  { value: "ECE", label: "ECE" },
  { value: "AIDS", label: "AIDS" },
  { value: "EEE", label: "EEE" },
  { value: "CSE(CS)", label: "CS" },
  { value: "CSE(CSBS)", label: "CSBS" },
  { value: "MECH", label: "MECH" },
  { value: "CIVIL", label: "CIVIL" },
  { value: "ECE(VLSI)", label: "VLSI" },
  { value: "BME", label: "BME" },
  { value: "AIML", label: "AIML" },
  { value: "ECE(ACT)", label: "ACT" },
  { value: "MCT", label: "MCT" },
];

const AddNewStaffProfile = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const { name, email, gender, department, contact } = state;

  const [hover, setHover] = useState(false);
  const buttonStyle = {
    backgroundColor: hover ? "darkblue" : "blue",
    color: "white",
    border: "none",
    fontSize: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !department || !gender || !contact) {
      toast.error("Please provide all the required details!");
    } else {
      const staffRef = ref(database, "StaffDetails");
      push(staffRef, state)
        .then(() => {
          toast.success("Staff details added successfully!");
          setTimeout(() => navigate("/"), 800);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "30ch", height: "10ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>Staff Details</h1>
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Full Name"
          multiline
          name="name"
          maxRows={4}
          value={name}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-textarea"
          label="Email Address"
          multiline
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <TextField
          id="filled-select-gender"
          select
          name="gender"
          value={gender}
          onChange={handleInputChange}
          label="Select Gender"
          helperText="Please select your gender"
          variant="filled"
        >
          {genderOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-department"
          select
          label="Select Department"
          name="department"
          value={department}
          onChange={handleInputChange}
          helperText="Please select your Department"
          variant="filled"
        >
          {departmentOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-number"
          label="Contact"
          type="number"
          name="contact"
          value={contact}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>
      <div>
        <button
          style={buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Submit
        </button>
      </div>
    </Box>
  );
};

export default AddNewStaffProfile;
