import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Paper } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = ({ coordinates, businessName }) => {
  const defaultPosition = [45.5155, -122.6789]; // Default center (Portland)
  const position = coordinates ? [coordinates.lat, coordinates.lng] : defaultPosition;

  return (
    <Paper sx={{ height: '400px', width: '100%', position: 'relative' }}>
      <div style={{ height: '100%', width: '100%' }}>
        <MapContainer 
          center={position} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }}
          key={`${position[0]}-${position[1]}`} // Force re-render when position changes
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coordinates && (
            <Marker position={position}>
              {businessName && <Popup>{businessName}</Popup>}
            </Marker>
          )}
        </MapContainer>
      </div>
    </Paper>
  );
};

export default Map; 