function Search({  searchTerm, setSearchTerm }) {

    function handleChange(e) {
      setSearchTerm(e.target.value.toLowerCase());
    }
  
    return (
        <form >
        <input
          id="search-form"
          type="text"
          value={searchTerm}
          placeholder="Search groceries"
          onChange={handleChange}
        />
      </form>
    );
  }
  
  export default Search;