import React from 'react';
import './App.css';
import Header from './assets/components/Header';
import Map from './assets/components/Map';
import Searchbar from './assets/components/Searchbar';
import Description from './assets/components/Description';
import Footer from './assets/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from '@material-ui/core';
import background from './assets/img/background.jpg'
import Funkin_Koobad from "./assets/music/Funkin_Koobad.mp3";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ffff"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${background})`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          height: "100%"
        }
      }
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <p>
          Na, K¡Ta! - Offizielle Behörde von der Bundesregierung beauftragte
          Zentrale Kitavergabestelle
        </p>
        <Header />
        <Description />
        <sapn className="breath">First of all take a deep breath, sit back and get some funky music if you want...</sapn>
        <br></br>
        <audio id="audio"
    controls
    src={Funkin_Koobad}>
        Your browser does not support the
        <code>audio</code> element.
</audio>
        <p>__________________________________________________________________________</p>
        <sapn className="breath">Second thing we have to find out in which neighbour hood you live in...</sapn>
        <br></br>
        <Searchbar />
        <br></br>
        <br></br>
        <sapn className="breath">Et voila...</sapn>
        <Map />
        <br></br>
        <br></br>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
