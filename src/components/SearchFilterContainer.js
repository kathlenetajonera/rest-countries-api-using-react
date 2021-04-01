import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

const SearchFilterContainer = ({ setKeyword, searchInputRef, setRegionFilter, regionFilterRef }) => {
    return (
        <div className="search-filter-container">
            <SearchBar setKeyword={ setKeyword } searchInputRef={ searchInputRef } />
            <FilterBar setRegionFilter={ setRegionFilter } regionFilterRef={ regionFilterRef } />
        </div>
    );
}
 
export default SearchFilterContainer;