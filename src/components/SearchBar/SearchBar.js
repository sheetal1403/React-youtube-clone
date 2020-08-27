import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';
import './SearchBar.css';

class searchBar extends Component{

    state = {
        searchTerm: ''
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }

    onChangeHandler = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return (
            <Paper elevation={3} className='SearchBar'>
                <form onSubmit={(event) => this.onSubmitHandler(event)}>
                    <TextField 
                        fullWidth 
                        label="Search" 
                        onChange={(event) => this.onChangeHandler(event)}
                        value={this.state.searchTerm}
                        ></TextField>
                </form>
            </Paper>
        )
    }
} 
    


export default searchBar;