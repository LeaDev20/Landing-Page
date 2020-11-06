import React from 'react';
import { Box, Typography } from '@material-ui/core';
import './styles.css';

const About = () => {
    return(
        <Box className="about">
            <Box p={5}>
                <Typography variant="h1" align="center">About Us</Typography>
            </Box>
        </Box>
    )
}

export default About;