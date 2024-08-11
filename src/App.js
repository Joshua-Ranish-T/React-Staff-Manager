import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StaffProfile from "./pages/StaffProfile";
import AddNewStaffProfile from "./pages/AddNewStaffProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Headertop from "./components/Headertop";
import StaffConfirmtionPage from "./pages/StaffConfirmtionPage";

function App() {
  return (
    <BrowserRouter>
      <Headertop />
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<StaffProfile />} />
          <Route path="/add" element={<AddNewStaffProfile />} />
          <Route path="/confirm" element={<StaffConfirmtionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
