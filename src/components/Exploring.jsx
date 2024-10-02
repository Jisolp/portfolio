import Map from './Map';
import CategoryFilter from './CategoryFilter';
import LocationList from './LocationList';
import SuggestSpot from './SuggestSpot';

const Exploring = () => {
  return (
    <div className='grid grid-cols-2 h-screen gap-4 p-6'>
      <div class="col-span-1">
        <CategoryFilter />
        <div className="mt-4">
          <LocationList />
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