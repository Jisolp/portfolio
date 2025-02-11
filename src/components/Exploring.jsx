import { useState } from 'react';
import Map from './Map';
import CategoryFilter from './CategoryFilter';
import LocationList from './LocationList';
import SuggestSpot from './SuggestSpot';

const Exploring = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="grid grid-cols-3 h-99vh gap-1 p-6 mt-9 relative">
      {/* Left Side: Filters and Locations List */}
      <div className="col-span-1 z-10">
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="mt-4">
          <LocationList selectedCategories={selectedCategories} 
                        onSelectLocation={handleSelectLocation}/>
        </div>
      </div>

      <div className="col-span-2 relative z-10">
          <Map selectedCategories={selectedCategories}
               selectedLocation={selectedLocation} />
      </div>

      <div className="relative left- bottom-20 z-20">
        <SuggestSpot />
      </div>
    </div>
  );
};

export default Exploring;
