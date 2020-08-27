import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const videoDetails = props => {

    if(!props.video) return <div>Loading...</div>

    const videoSource = `http://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <iframe height="100%" width="100%" title="Video Player" src={videoSource}/>
            </Paper>

            <Paper>
                <Typography variant="h6">{props.video.snippet.title} - {props.video.snippet.channelTitle}</Typography>
            </Paper>

        </React.Fragment>
    )
}

export default videoDetails;