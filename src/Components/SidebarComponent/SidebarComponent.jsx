import React from 'react';
import './SidebarComponent.css';

const Sidebar = ({ brands, onFilterChange, filters }) => {
 const priceIntervals = [
    { label: '$0 - $100', min: 0, max: 100 },
    { label: '$101 - $200', min: 101, max: 200 },
    // Add more intervals as needed
 ];

 const handleIntervalSelection = (event, interval) => {
    const isChecked = event.target.checked;
    onFilterChange({ priceIntervals: isChecked ? interval : null });
 };

 return (
    <div className="sidebar">
      <h2>Filters</h2>
      <h3>Brands</h3>
      {brands.map((brand, index) => (
        <label key={index}>
          <input
            type="checkbox"
            onChange={(event) => onFilterChange({ brand: event.target.checked ? brand.name : null })}
          />
          {brand.name} {/* Assuming each brand object has a 'name' property */}
        </label>
      ))}
      <h3>Price Intervals</h3>
      {priceIntervals.map((interval, index) => (
        <label key={index}>
          <input
            type="checkbox"
            onChange={(event) => handleIntervalSelection(event, interval)}
            checked={filters.priceIntervals === interval}
          />
          {interval.label}
        </label>
      ))}
    </div>
 );
};

export default Sidebar;
