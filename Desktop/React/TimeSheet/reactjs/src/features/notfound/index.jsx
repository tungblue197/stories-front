import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import BlockRoundedIcon from '@material-ui/icons/BlockRounded';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const NotFound = () => {
    const classes = useStyles();
    return (
        <Container fixed>
            <Grid container justify="center">
                <Grid item md={6} xs={12}>
                    <Box className={classes.notFoundContent} component={'div'}>
                        <BlockRoundedIcon className={classes.notFoundIcon} />
                        <Typography variant="h4">
                            404 Not Found Page !
                        </Typography>
                        <Box className={classes.linkToHome} component={"div"}>
                            <Link to="/">
                                <HomeIcon className={classes.homeIcon} />
                            </Link>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NotFound;