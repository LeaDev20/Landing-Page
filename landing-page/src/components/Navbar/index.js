import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import "./styles.css";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                Logo
            </Typography>
            <Button color="inherit">Services</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Team</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
