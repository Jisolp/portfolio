import React, { useState } from 'react';

const SuggestionPopUp = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Submit a Suggestion</h2>
        
        {submitted ? (
          <div className="text-center">
            <p className="text-lg mb-4">Your suggestion has been submitted!</p>
            <button 
              className="bg-third text-white px-4 py-2 rounded" 
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Location Name</label>
              <input type="text" className="border border-gray-300 p-2 w-full" placeholder="Enter location name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
              <textarea className="border border-gray-300 p-2 w-full" placeholder="Enter category (ex: food, cafe, hiking ...)" required></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description (Optional)</label>
              <textarea className="border border-gray-300 p-2 w-full" placeholder="Enter description" ></textarea>
            </div>
            {/* Add more form fields as needed */}
            <div className="flex justify-end">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
              <button type="submit" className="bg-third text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SuggestionPopUp;
