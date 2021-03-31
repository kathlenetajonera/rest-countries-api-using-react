import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

const SearchFilterContainer = () => {
    return (
        <div className="search-filter-container">
            <SearchBar />
            <FilterBar />
        </div>
    );
}
 
export default SearchFilterContainer;