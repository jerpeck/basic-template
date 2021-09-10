import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import PortfolioCard from './PortfolioCard';

const useStyles = makeStyles(() => ({
        root: {
            padding: "64px 0",
            width: "100%",
        },
}));

export default function Portfolio(props) {
    const classes = useStyles();
    const { works } = props;

    const worksCards = works.map((obj) => 
        <Grid item xs={12} sm={6} md={4}>
            <PortfolioCard data={obj}/>
        </Grid>)

    return(
        <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={4} >
                {worksCards}
            </Grid>
        </Container>
    )
}