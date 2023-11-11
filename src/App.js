import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Groceries from "./components/Groceries";
import Cart from "./components/Cart";
import Comments from "./components/Comments";
import Filter from "./components/Filter";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  const [groceries, setGroceries] = useState([]);
  const [selectedGroceries, setSelectedGroceries] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/groceries")
      .then((response) => response.json())
      .then((data) => setGroceries(data))
      .catch((error) => console.log(error));
  }, []);

  function addToYourCart(grocery){
    if (!selectedGroceries.includes(grocery)) {
      setSelectedGroceries([...selectedGroceries, grocery]);
    }
  };
  function removeFromYourCart(groceryId){
    if (selectedGroceries.some((grocery) => grocery.id === groceryId)) {
      setSelectedGroceries(selectedGroceries.filter((grocery) => grocery.id !== groceryId));
    } 
  }

  const searchedGroceries = groceries.filter((grocery) =>
  grocery.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleFilterChange = (category) => {
  setCategoryFilter(category);
  };
  
  const filteredData = [] = categoryFilter === 'all' ? searchedGroceries : searchedGroceries.filter((item) => item.category === categoryFilter);

  return (
    <>
      <NavBar />
        <Routes>
        <Route exact path="/" element={
      <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter categoryFilter={categoryFilter} handleFilterChange={handleFilterChange} />
     <div id = "groceries-list">
      <Groceries filteredData={filteredData} addToYourCart={addToYourCart} />
     </div>
    </div> }/>
          <Route exact path="/Cart" element={<Cart
          selectedGroceries={selectedGroceries}
          removeFromYourCart = {removeFromYourCart}
          />} />
          <Route exact path="/Comments" element={<Comments />}  />
        </Routes>
  </>
  );
}

export default App;
