function SearchBar({ city, setCity, onSearch }) {
    return (
        <div>
            <input className="inp"
                type="text"
                placeholder="Enter a city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <br />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}
export default SearchBar;