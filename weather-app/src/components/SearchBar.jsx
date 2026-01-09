function SearchBar({ city, setCity, onSearch, disabled }) {
    return (
        <div>
            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={onSearch} disabled={disabled}>
                Search
            </button>
        </div>
    );
}
export default SearchBar;