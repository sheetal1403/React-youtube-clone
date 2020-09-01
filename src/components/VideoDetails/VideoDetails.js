import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './VideoDetails.css';

const videoDetails = props => {

    if(!props.video) return <div>Loading...</div>

    const videoSource = `http://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <React.Fragment>
            
            <Paper elevation={3}>
                <iframe title="Video Player" width="100%" src={videoSource} className='Frame'/>
                <Typography variant="h6" className="Title">{props.video.snippet.title} - {props.video.snippet.channelTitle}</Typography>    
            </Paper>
            
            

        </React.Fragment>
    )
}

export default videoDetails;