import React from "react";
import { Map as MP,TileLayer } from "react-leaflet";

import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <MP center={center} zoom={zoom}>
      <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        {showDataOnMap(countries, casesType)}

      </MP>
    </div>
  );
}

export default Map;
