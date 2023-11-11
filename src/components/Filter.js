import React from "react";

function Filter({categoryFilter, handleFilterChange}){
    return(
    <div>
        <select id="dropdown-basic-button" value={categoryFilter} onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="all" >All</option>
            <option value="fruit" >Fruit</option>
            <option value="vegetable">Vegetable</option>
        </select>
    </div>

)
}

export default Filter;