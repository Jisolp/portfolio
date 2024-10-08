import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { locations } from '../constants';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Example marker icon
  iconSize: [20, 20],
});

const Map = ({ selectedCategories }) => {
  const filteredLocations = locations.filter((loc) =>
    selectedCategories.every((category) => loc.category.includes(category))
  );

  const defaultCenter = [32.7157, -117.1611]; // San Diego coordinates

  return (
    <div className="relative w-full h-full">
    <MapContainer
      center={defaultCenter} // Center point
      zoom={12}  // Appropriate zoom level for your map
      style={{ height: '100vh', width: '100%' }} // Full height/width
    >
        {/* Add TileLayer to load map tiles (streets, terrain, etc.) */}
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinate}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h4>{location.name}</h4>
                <p>{location.review}</p>
                <a href={location.map} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
