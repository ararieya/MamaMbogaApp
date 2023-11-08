import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    fetch('/db.json') 
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.groceries))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredData = categoryFilter === 'all' ? data : data.filter((item) => item.category === categoryFilter);

  return (
    <div className="App">
    <h1 style={{ textAlign: 'center' }}>Mama Mboga</h1>
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <button onClick={() => handleFilterChange('fruit')}>Filter Fruits</button>
      <button onClick={() => handleFilterChange('vegetable')}>Filter Vegetables</button>
      <button onClick={() => handleFilterChange('all')}>Show All</button>
    </div>
    <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredData.map((item) => (
          <div key={item.id} className="card" style={{ width: '30%', margin: '10px', textAlign: 'center' }}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
