import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import './VideoItem.css'

const videoItem = props => {
        return (
            <Grid item xs={12} onClick={props.clicked}>
                <Paper className="VideoItem" elevation={3}>
                <img alt="thumbnail-img" src={props.video.snippet.thumbnails.default.url}/>
                <p>{props.video.snippet.title}</p>
                </Paper>
            </Grid>   
        )
}

export default videoItem;