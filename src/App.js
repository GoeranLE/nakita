import React from 'react';
import './App.css';
import Header from './assets/components/Header';
import Main from './assets/components/Map';
import Footer from './assets/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from '@material-ui/core';
import background from './assets/img/background.jpg'

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
   <p>Na, K¡Ta!</p>
   <Header />
   <Map />
   <Footer />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
