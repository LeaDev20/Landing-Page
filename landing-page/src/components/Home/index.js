import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './styles.css';

const Home = () => {
    return(
        <Box className="home">
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Box p={5} m={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height={555}>
                        <Typography variant="h1">¡Welcome!</Typography>
                        <Typography variant="h4">Lorem ipsum dolor sit amet</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;