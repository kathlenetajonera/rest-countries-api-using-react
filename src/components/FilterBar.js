import { useState, useEffect } from "react";

const FilterBar = ({ setRegionFilter, regionFilterRef }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleSelectionToggle = () => {
        isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
    }

    const handleClick = (e) => {
        const selectedRegion = e.target.dataset.value;

        regionFilterRef.current.textContent = selectedRegion;
        setRegionFilter(selectedRegion);
    }

    useEffect(() => {
        const closeFilterDropdown = (e) => {
            if (isFilterOpen) {
                if (!e.target.classList.contains("filter__select") && !e.target.classList.contains("filter__option")) {
                    setIsFilterOpen(false);
                }
            }
        }

        document.addEventListener("click", closeFilterDropdown)

        return () => document.removeEventListener("click", closeFilterDropdown);
    })

    return (
        <div className="filter">
            <div className="filter__select" onClick={handleSelectionToggle} ref={regionFilterRef}>Filter by Region</div>

            <div className={`filter__options ${isFilterOpen ? "" : "filter__options--inactive"}`}>
                <p onClick={handleClick} className="filter__option" data-value="Africa">Africa</p>
                <p onClick={handleClick} className="filter__option" data-value="Americas">America</p>
                <p onClick={handleClick} className="filter__option" data-value="Asia">Asia</p>
                <p onClick={handleClick} className="filter__option" data-value="Europe">Europe</p>
                <p onClick={handleClick} className="filter__option" data-value="Oceania">Oceania</p>
            </div>
        </div>
    );
}
 
export default FilterBar;