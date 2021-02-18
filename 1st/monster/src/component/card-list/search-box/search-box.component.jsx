import React from 'react';
import "./search-box.styles.css";
export const SearchBox =({handleChange,placeholder}) => (
<input type="search" className="search"
 placeholder={placeholder} 
onChange={handleChange} />
 
);