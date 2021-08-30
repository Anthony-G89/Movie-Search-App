import React, { Component } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound"
import API from "./utils/API";
import './App.css';

class MovieContainer extends Component {

  state = {
    search: "",
    results: []
  };

  handleInputChange = event => {

// TWO DIFF WAYS TO setState //

    // console.log(event.target);

    // const value = event.target.value;
    // const name = event.target.name;
    // this.setState({
    //   [name]: value
    // });


      // console.log(event.target.value);
    this.setState({
      search: event.target.value
    })
  };


  handleSubmitForm = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    if (!this.state.search) {
      alert("please enter a movie");
      window.location.reload();
    };
    this.setState({
      search: ""
    })
  };

  searchMovies = moviesCollected => {
    API.movieSearch(moviesCollected)
      .then(response => this.setState({ results: response.data }) + console.log(response.data))
      .catch(err => console.log(err))
  };

  componentDidMount() {
    this.searchMovies("Avengers: Endgame")
  };



  render() {
    return (
      <div>
        <Header> Movies Search</Header>
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
          <NotFound >{this.state.results.Error}</NotFound>

        )}

      </div>
    );
  }
}

export default MovieContainer;
