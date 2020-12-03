import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Map from "./assets/components/Map";
import Searchbar from "./assets/components/Searchbar";
import Description from "./assets/components/Description";
import Footer from "./assets/components/Footer";
//import Audio from "./assets/components/Audio";
import "bootstrap/dist/css/bootstrap.min.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core";
import background from "./assets/img/back.png";
import Funkin_Koobad from "./assets/music/Super_Mario.mp3";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ffff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${background})`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          height: "100%",
        },
      },
    },
  },
});

const App = () => {
  const [kitas, setKitas] = useState(null);

  const [userInput, setUserInput] = useState(null); 

  useEffect(() => {
    const getKitas = async () => {
      try {
        const { data: kitas} = await axios.get(
          "https://nakitabackend.herokuapp.com/kita"
        );
        setKitas(kitas);
      } catch (e) {
        console.log(e.message);
      }
    };
    getKitas();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <p>
          {/* Na, K¡Ta! - Offizielle Behörde von der Bundesregierung beauftragte
          Zentrale Kitavergabestelle */}
        </p>
        <p>
          First of all take a deep breath, sit back and get some funky music if
          you want...
        </p>
        <audio id="audio" controls autoplay src={Funkin_Koobad}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <Header />
        <Description />
        <sapn className="breath">
          Second thing we have to find out in which neighbour hood you live
          in...
        </sapn>
        <br></br>
        <Searchbar setUserInput={setUserInput} />
        <br></br>
        <br></br>
        <span className="breath">Et voila...</span>
        {kitas && <Map kitas={kitas} userInput={userInput} />}
        <br></br>
        <br></br>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
