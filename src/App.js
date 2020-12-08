import React, { useState, useEffect } from "react";

//Style
import "./App.css";

//Components
import Header from "./assets/components/Header";
import Map from "./assets/components/Map";
import Searchbar from "./assets/components/Searchbar";
import Description from "./assets/components/Description";
// import Kitalist from "./assets/components/Kitalist";
import Footer from "./assets/components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core";
import background from "./assets/img/back.png";
import Funkin_Koobad from "./assets/music/Super_Mario.mp3";
import axios from "axios";
import Kitalist from "./assets/components/Kitalist";

// GRID

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    border: 0,
  },
}));


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
          backgroundSize: "cover",
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
        const { data: kitas } = await axios.get(
          "https://nakitabackend.herokuapp.com/kita"
        );
        setKitas(kitas);
      } catch (e) {
        console.log(e.message);
      }
    };
    getKitas();
  }, []);

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className={classes.root}>
          <p>Na, K¡Ta! - Na(chbarschafts) Kindergarten Suche</p>
          <p>
            First of all take a deep breath, sit back and get some funky music
            if you want...
          </p>
          <audio id="audio" controls autoplay src={Funkin_Koobad}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0} ></Paper>
              <Description />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0} ></Paper>
              <Searchbar setUserInput={setUserInput} />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}></Paper>
              {kitas && <Map kitas={kitas} userInput={userInput} />}
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}></Paper>
              {kitas && <Kitalist kitas={kitas} userInput={userInput} />}
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}></Paper>
              <Footer />
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
