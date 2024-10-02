import React from 'react';
import { LocationList } from '../constants';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="p-6 category-filter">
            <h2>Select Category</h2>
            {LocationList.map(category => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={selectedCategory === category ? 'active' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
