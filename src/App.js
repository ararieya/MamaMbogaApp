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
  
}