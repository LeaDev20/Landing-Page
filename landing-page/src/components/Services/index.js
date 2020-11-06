import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import './styles.css';

const Services = () => {
    return(
        <Box className="services">
            <Box p={5}>
                <Typography variant="h1" align="center">Services</Typography>
            </Box>
            <Box className="">
                <Grid container spacing={24}>
                    <Grid item xs={8} sm={4}>
                        <Box p={5} m={5} height={300}>
                            <Box>
                                <Typography variant="h3" align="center">Title</Typography>
                                <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Button size="small" fullWidth>Learn More</Button>
                            </Box>  
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Box p={5} m={5} height={300}>
                            <Box>
                                <Typography variant="h3" align="center">Title</Typography>
                                <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Button size="small" fullWidth>Learn More</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Box p={5} m={5} height={300}>
                            <Box>
                                <Typography variant="h3" align="center">Title</Typography>
                                <Typography color="textSecondary" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Button size="small" fullWidth>Learn More</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Services;