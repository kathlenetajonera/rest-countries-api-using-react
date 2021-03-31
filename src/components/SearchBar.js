const SearchBar = () => {
    return (
        <div className="search">
            <i className="search__icon fas fa-search" />
            <input className="search__field" type="text" placeholder="Search for a country..." /> 
        </div>
    );
}
 
export default SearchBar;