import React from 'react';
import { LocationList } from '../constants';

const LocationListComponent = ({ selectedCategory }) => {
    const filteredLocations = selectedCategory === 'all'
        ? LocationList
        : LocationList.filter(location => location.category.includes(selectedCategory));

    return (
        <div className="location-list">
            <h2>Recommendations</h2>
            <ul>
                {filteredLocations.map(location => (
                    <li key={location.id}>
                        <h3>{location.name}</h3>
                        <p>Rating: {location.rating} / 5</p>
                        <p>{location.review}</p>
                        <a href={location.googleLink} target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationListComponent;
