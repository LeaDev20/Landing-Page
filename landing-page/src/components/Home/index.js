import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const Home = () => {
    return(
        <Box id="home" className="home">
            <Grid container>
                <Grid item xs={6} sm={6}>
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