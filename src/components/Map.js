import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSelector } from "react-redux";
import Move from "./Move";
const icon = L.icon({ iconUrl: "./icon1.png", iconSize: [38.38] });

export const Map = () => {
  const regionInfo = useSelector((state) => state.region.coordinates);

  const position = [regionInfo[0], regionInfo[1]];

  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      whenCreated="null"
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GlyFpdYB72wTCrDnL9F7"
      />
      <Marker position={position} icon={icon}></Marker>
      {/* <LocationMarker /> */}

      <Move />
    </MapContainer>
  );
};

export default Map;
