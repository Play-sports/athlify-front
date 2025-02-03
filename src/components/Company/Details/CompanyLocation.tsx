import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function CompanyLocation({ data }: { data: any[] }) {
  return (
    <div>
      <h3>Location</h3>
      <MapContainer
        center={data}
        zoom={14} // Adjust zoom level for better visibility
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%" }} // Larger map for better display
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={data}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CompanyLocation;
