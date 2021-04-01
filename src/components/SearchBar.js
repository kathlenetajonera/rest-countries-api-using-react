const SearchBar = ({ setKeyword, searchInputRef }) => {
    return (
        <div className="search">
            <i className="search__icon fas fa-search" />
            <input 
                onChange={e => setKeyword(e.target.value)}
                ref={ searchInputRef }
                className="search__field" 
                type="text" 
                placeholder="Search for a country..." /> 
        </div>
    );
}
 
export default SearchBar;