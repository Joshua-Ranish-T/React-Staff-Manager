import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Padding } from "@mui/icons-material";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Headertop = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const addbutton = {
    backgroundColor: hover ? "darkblue" : "blue",
    color: "white",
    border: "none",
    fontSize: "18px",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Chennai Institute Of Technology
          </Typography>

          <button
            style={addbutton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            // sx={{ textAlign: "right" }}
            onClick={() => navigate("/Add")}
          >
            Add New
          </button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{ color: "black" }} />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Headertop;
