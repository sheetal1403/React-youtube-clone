import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem/VideoItem';

const videoList = props => {

    const videos = props.videos.map((video, id) => {
        return <VideoItem video={video} key={video.id.videoId} clicked={() => props.clicked(id)}/>
    })

    return (
        <Grid container spacing={3}>
            {videos}
        </Grid>
    )
};

export default videoList