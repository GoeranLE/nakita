import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapGL, { Marker } from "react-map-gl";
import data from "../../data/kitas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 52.52,
    longitude: 13.4049,
    zoom: 12,
    width: "100vw",
    height: "70vh",
  });
  const [selectedKita, setSelectedKita] = useState(null);

  return (
    <div>
      <br></br>
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
                {data.map(kita => {
                    return (

                        <Marker 
                        key={kita.id}
                        latitude={kita.alat}
                        longitude={kita.alon}
                    >
                        <button 
                        className="marker-btn"
                        onClick={e => {
                        e.preventDefault();
                        setSelectedKita(kita);
                            }}
                        >
                        <div>KITAS</div>
                            {/* <img src="../img/baby-icon.png" alt="Baby Icon"/> */}
                        </button>
                    </Marker>

                    )
                }
                )}
                {/* {selectedPark ? (
          <Popup
            latitude={selectedKita.alat}
            longitude={selectedKita.alon}
            onClose={() => {
              setSelectedKita(null);
            }}
          >
            <div>
              <h2>{selectedKita.name}</h2>
              <p>{selectedPark.properties.district}</p>
            </div>
          </Popup>
        ) : null} */}

            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
