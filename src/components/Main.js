import React, { Component } from 'react';
import WeatherCard from './WeatherCard'; 
import WeatherSearch from './WeatherSearch';
import '../styles/App.css';

const API_KEY = "7399a746dabca20e0d168495f300f568";

class Main extends Component {
  state = {
    currentWeather: null,
    weeklyWeather: [],
    cities: ['Москва', 'Санкт-Петербург', 'Омск', 'Новосибирск', 'Орёл'],
    selectedCity: 'Москва',
  };

  componentDidMount() {
    this.getWeather(this.state.selectedCity);
  }

  getWeather = async (city) => {
    try {
      const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const weeklyWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

      if (!currentWeatherResponse.ok || !weeklyWeatherResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const currentWeatherData = await currentWeatherResponse.json();
      const weeklyWeatherData = await weeklyWeatherResponse.json();

      this.setState({
        currentWeather: currentWeatherData,
        weeklyWeather: weeklyWeatherData.list.filter((reading) => reading.dt_txt.includes("12:00:00")),
      });
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  }

  handleCitySearch = (city) => {
    this.setState({ selectedCity: city }, () => this.getWeather(city));
  }

  render() {
    const { currentWeather, weeklyWeather, cities, selectedCity } = this.state;

    return (
      <div className="App">
        <WeatherSearch onSearch={this.handleCitySearch} />
        <div className="city-buttons">
          {cities.map((city) => (
            <button key={city} onClick={() => this.getWeather(city)}>
              {city}
            </button>
          ))}
        </div>
        {currentWeather && <WeatherCard weather={currentWeather} />}
        <div className="weekly-weather">
          {weeklyWeather.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
