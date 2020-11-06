import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import "./styles.css";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar className="navbar">
            <Box ml={10} flexGrow={1}>
              <Typography variant="h6" color="inherit">
                  Logo
              </Typography>
            </Box>
            <Box mr={10}>
              <Button color="inherit" size="large" id="button">Services</Button>
              <Button color="inherit" size="large" id="button">About</Button>
              <Button color="inherit" size="large" id="button">Team</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
