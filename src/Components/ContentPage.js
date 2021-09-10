import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import OnePage from './OnePage';

const useStyles = makeStyles(() => ({
    contentPaper: {
        margin: "0 256px",
        padding: "32px"
    },
}))

export default function ContentPage(props) {
    const { title, description } = props.works.filter(o => o.id === props.match.params.id)[0];
    const classes = useStyles();

    return(
        <OnePage >
            <Paper className={classes.contentPaper}>
                <Typography variant="h2" >{title}</Typography>
                <Typography variant="subtitle2" >{description}</Typography>
            </Paper>
        </OnePage >
    )
}