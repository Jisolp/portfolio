import React, { useState } from 'react';

const SuggestSpot = () => {
    const [suggestion, setSuggestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the suggestion to an email or a server
        alert(`Thank you for suggesting: ${suggestion}`);
        setSuggestion('');
    };

    return (
        <div className="suggest-spot">
            <h2>Suggest a Spot</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={suggestion} 
                    onChange={(e) => setSuggestion(e.target.value)} 
                    placeholder="Enter spot name" 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SuggestSpot;

