import React, {useEffect, useState} from 'react';
import GroceriesList from './components/Groceries';

function App() {
  const [groceries, setGroceries] = useState([]);

   //Fetch data from db.json
   useEffect(() => {
    fetch('http://localhost:3001/groceries')
      .then((response) => response.json())
      .then((data) => {
        setGroceries(data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="App">

      <h2>Groceries List</h2>
      <GroceriesList  groceries= {groceries}/>
    </div>
  );
}

export default App;
