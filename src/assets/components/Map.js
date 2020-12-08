import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

/// FUTUR STUFF - BETTER SEARCH
//import Geocoder from 'react-mapbox-gl-geocoder';

//Mockdata
//import data from "../../data/kitas";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon from "../img/Baby_Mario_Crying.gif";

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



export default function Map({ kitas, userInput }) {
  const [viewport, setViewport] = useState({
    latitude: 52.52,
    longitude: 13.4049,
    zoom: 12,
    width: "100%",
    height: "70vh",
  });
  const [selectedKita, setSelectedKita] = useState(null);

  const handleSearchKitas = (kitas) => {
    if (!userInput) return kitas.slice(0, 300);
    return kitas.filter((kita) => {
      return kita.plz.toString().includes(userInput);
    });
  };

  // kitas.slice(0, 300)
  //               .filter(kita=> {
  //               if(userInput) return kita.plz === userInput;
  //               return kita;
  //               })
  const classes = useStyles();

  return (
    <div className={classes.root}>
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={0} >Welcome to the world of Kitas</Paper>
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="col-md-9">
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle="mapbox://styles/goeran/ckhxizi2m07b019qv8xbgpsc0/draft"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            >
              {kitas &&
                handleSearchKitas(kitas).map((kita) => {
                  return (
                    <Marker
                      key={kita.id}
                      latitude={kita.alat}
                      longitude={kita.alon}
                    >
                      <button
                        className="marker-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedKita(kita);
                        }}
                      >
                        <img src={icon} alt="Baby Icon" className="baby" />
                      </button>
                    </Marker>
                  );
                })}
              {selectedKita ? (
                <Popup
                  latitude={selectedKita.alat}
                  longitude={selectedKita.alon}
                  onClose={() => {
                    setSelectedKita(null);
                  }}
                >
                  <div>
                    <h2>{selectedKita.name}</h2>
                    <p>{selectedKita.address}</p>
                    <p>{selectedKita.plz}</p>
                    <p>{selectedKita.district}</p>
                  </div>
                </Popup>
              ) : null}
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    </Grid>
  </Grid>
</div>
  );
}
