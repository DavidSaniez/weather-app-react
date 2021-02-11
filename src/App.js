import React from 'react';
import UserLocation from './components/UserLocation.js';
import Navbar from './components/Navbar.js'
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  //state
  state = {
    userPosition: {
      latitude: 48.856614,
      longitude: 	2.3522219
    },
    weather: {},
    regionInput: ""
  }

  componentDidMount() {
    //check whether geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        //get the lat and long of your device
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({ userPosition: pos });

        //Weather Api call
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=34d9d8f6ccf10a5542c61362e823e135&units=metric`).then(res => {

          let userWeather = {
            temperature: res.data.main.temp,
            description: res.data.weather.description,
            localisation: res.data.name,
            pays: res.data.sys.country,
            vit_vent: res.data.wind.speed,
            pression: res.data.main.pressure,
            humidite: res.data.main.humidity,
          }

          this.setState({ weather: userWeather });
        })
      })
    }
  }

  //update the value of the the input field with state
  changeRegion = (value) => {
    this.setState({ regionInput: value })
  }

  //update the weather depending upon the value user entered
  changeLocation = (e) => {

    e.preventDefault()

    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.regionInput}&appid=34d9d8f6ccf10a5542c61362e823e135&units=metric`).then(res => {

      let userWeather = {
        temperature: res.data.main.temp,
        description: res.data.weather.description,
        localisation: res.data.name,
        pays: res.data.sys.country,
        vit_vent: res.data.wind.speed,
        pression: res.data.main.pressure,
        humidite: res.data.main.humidity,
      }

      this.setState({ weather: userWeather });

    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar changeRegion={this.changeRegion} changeLocation={this.changeLocation} />
          <UserLocation weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
