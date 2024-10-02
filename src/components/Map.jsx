import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationList } from '../constants/index';

const Map = ({ selectedCategory }) => {
    const filteredLocations = selectedCategory === 'all'
        ? LocationList
        : LocationList.filter(location => location.category.includes(selectedCategory));

    return (
        <MapContainer center={[32.8899, -117.2512]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {filteredLocations.map(location => (
                <Marker key={location.id} position={[location.coordinates.lat, location.coordinates.lng]}>
                    <Popup>
                        <div>
                            <h2>{location.name}</h2>
                            <p>Rating: {location.rating} / 5</p>
                            <p>{location.review}</p>
                            <div>
                                {location.images.length > 0 ? (
                                    location.images.map((img, index) => (
                                        <img key={index} src={img} alt={location.name} style={{ width: '50px', margin: '5px' }} />
                                    ))
                                ) : (
                                    <p>No images for now.</p>
                                )}
                            </div>
                            <a href={location.googleLink} target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
