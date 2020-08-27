import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import youtubeAxios from './api/axios-youtube';

import SearchBar from './components/SearchBar/SearchBar';
import VideoDetails from './components/VideoDetails/VideoDetails';

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

  render(){
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid justify="center" container spacing={2}>
            <Grid  item xs={8}><SearchBar onFormSubmit = {this.onFormSubmitHandler}/></Grid>
            <Grid item xs={8}><VideoDetails/></Grid>
            <Grid item xs={4}>VIDEO LIST</Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  
}

export default App;
