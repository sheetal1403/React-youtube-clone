import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem/VideoItem';

const videoList = props => {

    const videos = props.videos.map((video, id) => {
        return <VideoItem video={video} key={video.id.videoId} clicked={() => props.clicked(id)}/>
    })

    return (
        <React.Fragment>
            <h4>Related videos</h4>
            <Grid container spacing={3}>
                {videos}
             </Grid>
        </React.Fragment>
        
    )
};

export default videoList