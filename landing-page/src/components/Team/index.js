import React from 'react';
import { Box, Typography } from '@material-ui/core';
import './styles.css';

const Team = () => {
    return(
        <Box className="team">
            <Box p={5}>
                <Typography variant="h1" align="center">Our Team</Typography>
            </Box>
        </Box>
    )
}

export default Team;