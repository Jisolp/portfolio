import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { locations } from '../constants';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 25],
});

const Map = ({ selectedCategories, selectedLocation }) => {
  const filteredLocations = locations.filter((loc) =>
    selectedCategories.some((category) => loc.category.includes(category))
  );

  const defaultCenter = [32.7157, -117.1611]; // San Diego

  const markerRefs = useRef({});

  const FlyToLocation = () => {
    const map = useMap();

    useEffect(() => {
      if (selectedLocation) {
        map.flyTo(selectedLocation.coordinate, 14, { duration: 1.5 });

        if (markerRefs.current[selectedLocation.id]) {
          markerRefs.current[selectedLocation.id].openPopup();
        }
      }
    }, [selectedLocation, map]);

    return null;
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={defaultCenter}
        zoom={12}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <FlyToLocation />

        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinate}
            icon={customIcon}
            ref={(el) => {
              markerRefs.current[location.id] = el;
            }}
          >
            <Popup>
              <div>
                <h4>{location.name}</h4>
                <p>{location.rating}/5</p>
                <p>{location.review}</p>
                <a href={location.googlelink} target="_blank" rel="noopener noreferrer">
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
