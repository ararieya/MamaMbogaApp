function Search({  searchTerm, setSearchTerm }) {

    function handleChange(e) {
      setSearchTerm(e.target.value.toLowerCase());
    }
  
    return (
      <form id="search-form">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search groceries"
          onChange={handleChange}
        />
      </form>
    );
  }
  
  export default Search;