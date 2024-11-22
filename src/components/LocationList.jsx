import React from 'react';
import { locations } from '../constants';

const LocationList = ({ selectedCategories , onSelectLocation}) => {
  // Filter locations based on selected categories
  const filteredLocations = locations.filter((loc) =>
    selectedCategories.some((category) => loc.category.includes(category))
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto max-h-96 max-w-xs">
      <h3 className="text-xl font-semibold mb-2">Suggestions!</h3>
      <hr className="border-gray-300 my-2" />
      
      {filteredLocations.length > 0 ? (
        <ul>
          {filteredLocations.map((location) => (
            <li 
              key={location.id}
              onClick={() => onSelectLocation(location)}
              className="mb-4 p-4 border rounded-md shadow-sm hover:border-gray-950 cursor-pointer transition duration-200"
            >
              <div className="font-semibold text-lg">{location.name}</div>
              <p className="text-sm">{location.rating}/5</p>
              <p className="text-sm text-gray-600">{location.review}</p>
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
