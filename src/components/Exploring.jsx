import { useState } from 'react';
import { locations } from '../constants';
import Map from './Map';
import CategoryFilter from './CategoryFilter';
import LocationList from './LocationList';
import SuggestSpot from './SuggestSpot';

const Exploring = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <div className='grid grid-cols-2 h-screen gap-4 p-6 mt-9'>
      <div class="col-span-1">
        <CategoryFilter selectedCategories={selectedCategories} 
          setSelectedCategories={setSelectedCategories} />
        <div className="mt-4">
          <LocationList selectedCategories={selectedCategories}/>
        </div>
      </div>

      <div className="col-span-1 mt-12 relative">
        <Map />
        <div className="absolute bottom-4 right-4">
          < SuggestSpot />
        </div>
      </div>
    </div>
  )
}

export default Exploring