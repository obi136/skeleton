import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/UserPage/UserPage";
import Footer from "./components/Footer/Footer";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserPage />
        <Footer />
      </div>
    );
  }
}

export default App;
