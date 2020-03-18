import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Detail} from './pages/Detail'
import {Home} from './pages/Home'


class App extends Component {
  
  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <Detail id = {url.searchParams.get('id')}/>
    : <Home />

    return (
      <div className="App">
        {Page}
      </div>
    );
  }
}


/*
  _handleResults = (results) => {
    this.setState({ results, usedSearch:true })
  }
  
    _renderResults () {
      const {results} = this.state
      return results.map(movie => {
      return (
      <Movie 
        key={movie.imdbID}
        title = {movie.Title}
        year = {movie.Year}
        poster = {movie.Poster}/>
      )
      })
    }
  
  _renderResults() {
    return this.state.results.length === 0
      ? <p>Sorry! Results not found</p>
      : <MoviesList movies={this.state.results} />
    }
  */

export default App;
