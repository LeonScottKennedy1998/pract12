import React from 'react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { main, weather: weatherDetails, name, dt_txt } = weather;
  const { temp } = main;
  const description = weatherDetails[0].description;

  let weatherClass = 'weather-card';

  // Определение класса в зависимости от описания погоды
  if (description.toLowerCase().includes('clear')) {
    weatherClass += ' clear';
  } else if (description.toLowerCase().includes('clouds')) {
    weatherClass += ' clouds';
  } else if (description.toLowerCase().includes('rain')) {
    weatherClass += ' rain';
  } else if (description.toLowerCase().includes('thunderstorm')) {
    weatherClass += ' thunderstorm';
  }

  return (
    <div className={weatherClass}>
      {name && <h2>{name}</h2>}
      <p>{dt_txt ? new Date(dt_txt).toDateString() : 'Текущая погода'}</p>
      <p>{description}</p>
      <p>{temp}°C</p>
    </div>
  );
}

export default WeatherCard;
