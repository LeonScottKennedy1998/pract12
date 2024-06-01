import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <div className="container">
      <Header />
      </div>
        <Main />
      <div className="container">
      <Footer />
      </div>
    </div>
  );
}

export default App;
