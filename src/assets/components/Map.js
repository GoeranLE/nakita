import React, {useState} from "react";
import mapboxgl from 'mapbox-gl';
import ReactMapGL from "react-map-gl";


export default function Main() {
const [viewport ,setViewport] = useState({
    latitude: 52.5200,
    longitude: 13.4049,
    zoom: 12,
    width: '100vw',
    height: "100vh",

})

    return (
        <div>
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
         mapStyle="mapbox://styles/goeran/ckhxizi2m07b019qv8xbgpsc0/draft"
        onViewportChange={viewport => {
            setViewport(viewport);
        }}
        >
        my map
        </ReactMapGL>
        </div>
    )
}