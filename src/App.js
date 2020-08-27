import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import youtubeAxios from './api/axios-youtube';

import SearchBar from './components/SearchBar/SearchBar';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoList from './components/VideoList/VideoList';
import './App.css';

class App extends Component{

  state = {
    videos: [],
    selectedVideo: null
  }

  onFormSubmitHandler = async (searchTerm) => {
    try{
      const response = await youtubeAxios.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyDZTYzbGwxGIUAgxu0CkfL75ReJfAyParg',
          q: searchTerm
        }
      });
      console.log(response.data.items);

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      })
    }
    catch{
      console.log('error');
    }
    
  } 

  onVideoClickHandler = (id) => {
    const selectedVideo = this.state.videos[id];
    this.setState({
      selectedVideo
    })
  }

  render(){

    const welcomeMessage = (
      <Grid item xs={12} className="Welcome">Search for any video!</Grid>
    )

    let videoContent = welcomeMessage;

    if(this.state.selectedVideo){
      videoContent = (
        <React.Fragment>
           <Grid item xs={12} sm={8}><VideoDetails video={this.state.selectedVideo}/></Grid>
           <Grid item xs={12} sm={4}><VideoList clicked = {this.onVideoClickHandler} videos = {this.state.videos}/></Grid>
        </React.Fragment>
       
      )
    }


    return (
      <Grid container spacing={0} className="App">
        <Grid item xs={12}>
          <Grid justify="center" container spacing={2}>
            <Grid  item xs={8}><SearchBar onFormSubmit = {this.onFormSubmitHandler}/></Grid>
            {videoContent}
          </Grid>
        </Grid>
      </Grid>
    );
  }

  
}

export default App;
