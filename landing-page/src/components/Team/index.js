import React from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core';
import developer from './images/developer.jpg';
import engineer from './images/engineer.jpg';
import dataAnalytic from './images/data-analytic.jpg';
import machineLearnign from './images/machine-learning.jpg';    
import './styles.css';

const Team = () => {
    return(
        <Box className="team">
            <Box p={5}>
                <Typography variant="h1" align="center">Our Team</Typography>
            </Box>
            <Box py={5} px={5}>
                <Grid container spacing={24}>    
                    <Grid item xs={6} sm={3}>
                        <Box mx={1}>
                            <Paper elevation={10}>
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Box>
                                        <img src={developer} alt="" className="img-team" />
                                    </Box>
                                    <Box p={2}>
                                        <Typography variant="h5">Gideon Mendels</Typography>
                                        <Divider />
                                        <Typography variant="h6" color="textSecondary">Software Developer</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box mx={1}>
                            <Paper elevation={10}>
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Box>
                                        <img src={engineer} alt="" className="img-team" />
                                    </Box>
                                    <Box p={2}>
                                        <Typography variant="h5">Niko Laskaris</Typography>
                                        <Divider />
                                        <Typography variant="h6" color="textSecondary">Software Engineer</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box mx={1}>
                            <Paper elevation={10}>
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Box>
                                        <img src={dataAnalytic} alt="" className="img-team" />
                                    </Box>
                                    <Box p={2}>
                                        <Typography variant="h5">Sam Awrabi</Typography>
                                        <Divider />
                                        <Typography variant="h6" color="textSecondary">Data Analytic</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box mx={1}>
                            <Paper elevation={10}>
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Box>
                                        <img src={machineLearnign} alt="" className="img-team" />
                                    </Box>
                                    <Box p={2}>
                                        <Typography variant="h5">Douglas Blank</Typography>
                                        <Divider />
                                        <Typography variant="h6" color="textSecondary">Machine Learning</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Team;