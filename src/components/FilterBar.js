import { useState } from "react";

const FilterBar = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleClick = () => {
        isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
    }

    return (
        <div className="filter">
            <div className="filter__select" onClick={handleClick}>Filter by Region</div>

            <div className={`filter__options ${isFilterOpen ? "" : "filter__options--inactive"}`}>
                <p className="filter__option">Africa</p>
                <p className="filter__option">Africa</p>
                <p className="filter__option">Africa</p>
                <p className="filter__option">Africa</p>
                <p className="filter__option">Africa</p>
            </div>
        </div>
    );
}
 
export default FilterBar;