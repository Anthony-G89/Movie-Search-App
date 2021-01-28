import React, { Component } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import MovieDetail from "./components/MovieDetail";
import API from "./utils/API";
import './App.css';

class MovieContainer extends Component {

  state = {
    search: "",
    results: []
  };


  componentDidMount() {
    this.searchMovies("The Godfather")
  };

  searchMovies = moviesCollected => {
    API.movieSearch(moviesCollected)
      .then(response => this.setState({ results: response.data }) + console.log(response.data))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  handleSubmitForm = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    this.setState({
      search: ""
    })
  };


  render() {
    return (
      <div>
        <Header> Movie Search</Header>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmitForm={this.handleSubmitForm}
        />
        {this.state.results.Title ? (
          <MovieDetail
            title={this.state.results.Title}
            src={this.state.results.Poster}
            actors={this.state.results.Actors}
            director={this.state.results.Director}
            plot={this.state.results.Plot}
            rated={this.state.results.Rated}
            genre={this.state.results.Genre}
            released={this.state.results.Released}
          />
        ) : (
           <h3 className="noDisplay">No results to display!</h3>
         )}

      </div>
    );
  }
}

export default MovieContainer;
