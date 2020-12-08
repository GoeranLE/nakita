import React from 'react';
import { useHistory } from "react-router-dom";
import notFoundImage from '../img/404.jpg';

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#0000",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${notFoundImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100%",
        },
      },
    },
  },
});


export default function NotFound() {

  let history = useHistory()
    return (
<MuiThemeProvider theme={theme}>
        <CssBaseline />
     <div className="notFoundContainer">
         <div className="hi">
              <div className="notFound">
                <p className="notFoundText">The Kita you are looking for is <em>undefined</em>...</p>
              </div>

              <div>
                <button onClick={() => history.push("/")} type="button" className="btn btn-light">Continue...9...8...7</button>
              </div>
            </div>  
        
      </div>
      </MuiThemeProvider>
    );
}
