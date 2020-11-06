import React from 'react';
import { Box, Grid, Typography, Divider } from '@material-ui/core';
import testamento from '../../images/testamento.png';
import mapa from '../../images/mapa.png';
import idea from '../../images/idea.png';
import lupa from '../../images/lupa.png';
import './styles.css';

const About = () => {
    return(
        <Box className="about">
            <Box p={5}>
                <Typography variant="h1" align="center">About Us</Typography>
            </Box>
            <Box>
                <Grid container spacing={24}>
                    <Grid item xs={24} sm={12}>
                        <Box p={5} m={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200}>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <img src={lupa} className="img-about" alt=""/>
                                        </Box>
                                    </Grid>
                                    <Grid item item xs={12} sm={6}>
                                        <Typography variant="h3">Title</Typography>
                                        <Typography color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Divider variant="inset"/>
                    </Grid>
                    <Grid item xs={24} sm={12}>
                        <Box p={5} m={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200}>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Typography variant="h3">Title</Typography>
                                            <Typography color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item item xs={12} sm={6}>
                                        <Box>
                                            <img src={idea} className="img-about" alt=""/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Divider variant="inset"/>
                    </Grid>
                    <Grid item xs={24} sm={12}>
                        <Box p={5} m={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200}>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <img src={testamento} className="img-about" alt=""/>
                                        </Box>
                                    </Grid>
                                    <Grid item item xs={12} sm={6}>
                                        <Typography variant="h3">Title</Typography>
                                        <Typography color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Divider variant="inset"/>
                    </Grid>
                    <Grid item xs={24} sm={12}>
                        <Box p={5} m={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200}>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Typography variant="h3">Title</Typography>
                                            <Typography color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item item xs={12} sm={6}>
                                        <Box>
                                            <img src={mapa} className="img-about" alt=""/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Divider variant="fullWidth"/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default About;