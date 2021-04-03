import React, { useState, useRef } from "react";

export const SearchFilterContext = React.createContext();

export const SearchFilterProvider = (props) => {
    const [keyword, setKeyword] = useState(null);
    const [regionFilter, setRegionFilter] = useState(null);
    const regionFilterRef = useRef(); 
    const searchInputRef = useRef();

    return (
        <SearchFilterContext.Provider 
            value={[keyword, setKeyword, searchInputRef, regionFilter, setRegionFilter, regionFilterRef]} 
        >
            {props.children}
        </SearchFilterContext.Provider>
    )
}