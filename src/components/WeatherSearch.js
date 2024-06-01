import React, { Component } from 'react';
import '../styles/WeatherSearch.css';

class WeatherSearch extends Component {
  state = {
    query: '',
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <form className="weather-search" onSubmit={this.handleSearch}>
        <input 
          type="text" 
          placeholder="Введите город" 
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <button type="submit">Поиск</button>
      </form>
    );
  }
}

export default WeatherSearch;
