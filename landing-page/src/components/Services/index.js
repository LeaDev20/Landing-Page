import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import premio from './images/premio.png';
import services from './images/services.png';
import './styles.css';

const Services = () => {
    return(
        <Box id="services" className="services">
            <Box p={5}>
                <Typography variant="h1" align="center">Services</Typography>
            </Box>
            <Box p={10}>
                <Grid container spacing={24}>    
                    <Grid item xs={8} sm={4}>
                        <Box p={5} height={500}>
                            <Paper>
                                <Box p={1}>
                                    <img src={services} alt="" className="img-services"/>
                                </Box>
                                <Box p={3}>
                                    <Box>
                                        <Typography variant="h3" align="center">Web Design's</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Box>
                                </Box>
                                <Button size="large" fullWidth>Contact us</Button>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Box px={5} height={500}>
                            <Paper>
                                <Box p={2}>
                                    <img src={premio} alt="" className="img-services"/>
                                </Box>
                                <Box p={3}>
                                    <Box>
                                        <Typography variant="h3" align="center">Mobile App's</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Box>
                                </Box>
                                <Button size="large" fullWidth>Contact us</Button>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Box p={5} height={500}>
                            <Paper>
                                <Box p={1}>
                                    <img src={services} alt="" className="img-services"/>
                                </Box>
                                <Box p={3}>
                                    <Box>
                                        <Typography variant="h3" align="center">API-Rest</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Box>
                                </Box>
                                <Button size="large" fullWidth>Contact us</Button>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Services;