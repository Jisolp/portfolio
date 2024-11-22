import React, { useState } from 'react';
import SuggestionPopUp from './SuggestionPopUp';

const SuggestSpot = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div>
      <button 
        className="bg-third text-white px-4 py-2 rounded" 
        onClick={handleOpenPopUp}
      >
        Suggest a Spot!
      </button>

      <SuggestionPopUp isOpen={isPopUpOpen} onClose={handleClosePopUp} />
    </div>
  );
};

export default SuggestSpot;
