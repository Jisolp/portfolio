import React from 'react';

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const categories = ['Sunset Spots', 'Trails/Hiking','Activity', 'Cafe', 'Food'];

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
      <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
      {categories.map((category, index) => (
        <div key={index} className="mb-2">
          <input
            type="checkbox"
            id={category}
            className="mr-2"
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          <label htmlFor={category} className="text-gray-700">{category}</label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
