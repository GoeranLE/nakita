import React from 'react';
import { Button } from 'react-bootstrap'


import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core";

import Tube from '../img/back2.png'
// import Pipe from "../music/pipe-sound";

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
            backgroundImage: `url(${Tube})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "100%",
          },
        },
      },
    },
  });


export default function Intro() {

    return (

        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="intro" >
   <Button variant="success" ><a href="/home"> Find your right Kita, when entering the tube </a></Button>{' '}
   </div>
      </MuiThemeProvider>
    );
  }
 
