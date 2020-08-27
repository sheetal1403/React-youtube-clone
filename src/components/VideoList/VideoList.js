import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem/VideoItem';

const videoList = props => {

    const videos = props.videos.map(video => {
        return <VideoItem video={video} key={video.id.videoId}/>
    })

    return (
        <Grid container spacing={8}>
            {videos}
        </Grid>
    )
};

export default videoList