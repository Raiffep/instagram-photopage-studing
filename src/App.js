import React, { Component } from 'react';
import Photo from './components/Photo';
import './App.css';

class App extends Component {
  render() {
    const imageData = {
      src: "https://wallpapercave.com/wp/wp2506797.jpg",
      user: {
        name: "Profile Name",
        profile_image: "https://profile.actionsprout.com/default.jpeg",
        link: "https://www.instagram.com"
      }
    };
    return (
      <div className="App">
        <Photo {...imageData}/>
      </div>
    );
  }
}

export default App;
