import React from 'react';
import { locations } from '../constants';

const LocationList = ({ selectedCategories }) => {
  const filteredLocations = locations.filter((loc) =>
    selectedCategories.every((category) => loc.category.includes(category))
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto max-h-64 max-w-xs">
      <h3 className="text-xl font-semibold mb-2">Results</h3>
      <hr className="border-gray-300 my-2" /> 
      {filteredLocations.length > 0 ? (
        <ul>
          {filteredLocations.map((location) => (
            <li key={location.id} className="mb-4">
              <h4 className="font-bold">{location.name}</h4>
              <p className="text-sm"> {location.rating}/5</p>
              <p className="text-gray-600">{location.review}</p>
              <p className="text-gray-600">{location.googlelink}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No locations found for the selected categories.</p>
      )}
    </div>
  );
};

export default LocationList;
