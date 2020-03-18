import React, { Component } from 'react';
const API_KEY = '6fb7f564'
export class SearchForm extends Component {

    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value }) //Guardamos en el state del componente el texto que se introduzca en el input 
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`) //s hace una busqueda y devuelve un listado con todos los que coincidan con el nombre
        .then(res => res.json()) //devuelve una promesa
        .then(results => {
            //console.log(results)
            const {Search = [], totalResults = "0"} = results
            console.log({Search, totalResults})
            this.props.onResults(Search)
        })
    }
    
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            onChange={this._handleChange}
                            className="input"
                            type="text"
                            placeholder="Movie to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
export default SearchForm