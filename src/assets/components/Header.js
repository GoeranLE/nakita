import React from "react";
import "../../App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import Nav from 'react-bootstrap/Nav';
import logo from "../img/logo_nakita.png";

// GRID

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    border: 0,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}></Paper>
          <Navbar.Brand href="/">
            <div>
              <img
                src={logo}
                alt="Logo of the Kita Search Webapp"
                className="logo"
              />
            </div>
          </Navbar.Brand>
        </Grid>
      </Grid>
    </div>
  );
}
