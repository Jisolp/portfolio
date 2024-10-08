import { useState } from 'react';
import Map from './Map';
import CategoryFilter from './CategoryFilter';
import LocationList from './LocationList';
import SuggestSpot from './SuggestSpot';

const Exploring = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="grid grid-cols-3 h-screen gap-1 p-6 mt-9 relative">
      {/* Left Side: Filters and Locations List */}
      <div className="col-span-1 z-10">
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="mt-4">
          <LocationList selectedCategories={selectedCategories} />
        </div>
        <div className="absolute bottom-4 z-10">
          <SuggestSpot />
        </div>
      </div>

      <div className="col-span-2 relative">
        <div className="absolute inset-0">
          <Map selectedCategories={selectedCategories} />
        </div>
        <div className="absolute bottom-4 z-10">
          <SuggestSpot />
        </div>
      </div>
    </div>
  );
};

export default Exploring;
