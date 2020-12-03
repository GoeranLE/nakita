import React, { useState } from "react";
import ReactMapGL, { Marker, Popup  } from "react-map-gl";
import Geocoder from 'react-mapbox-gl-geocoder';

//Mockdata
//import data from "../../data/kitas";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon from '../img/Baby_Mario_Crying.gif';

export default function Map({kitas, userInput}) {
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
            
                {kitas.slice(0, 1000).filter(kita=> {
if(userInput) return kita.plz === userInput;
return kita;
}).map(kita => {
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
                        
                        <img src={icon} alt="Baby Icon" className="baby" />
                        </button>
                    </Marker>

                    )
                }
                )}
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
    </div>
  );
}
