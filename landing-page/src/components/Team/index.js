import React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import './styles.css';

const Team = () => {
    return(
        <Box className="team">
            <Box p={5}>
                <Typography variant="h1" align="center">Our Team</Typography>
            </Box>
            <Box>
                <Grid container spacing={24}>    
                    <Grid item xs={6} sm={3}>
                        <Box p={5} height={300}>
                            <Paper>
                                <Box p={5}>
                                    <Box>
                                        <Typography variant="h3" align="center">Title</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box p={5} height={300}>
                            <Paper>
                                <Box p={5}>
                                    <Box>
                                        <Typography variant="h3" align="center">Title</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box p={5} height={300}>
                            <Paper>
                                <Box p={5}>
                                    <Box>
                                        <Typography variant="h3" align="center">Title</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box p={5} height={300}>
                            <Paper>
                                <Box p={5}>
                                    <Box>
                                        <Typography variant="h3" align="center">Title</Typography>
                                        <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
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