import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value }) //Guardamos en el state del componente el texto que se introduzca en el input 
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.inputMovie)
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div class="field has-addons">
                    <div class="control">
                        <input
                            onChange={this._handleChange}
                            class="input"
                            type="text"
                            placeholder="Movie to search..." />
                    </div>
                    <div class="control">
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