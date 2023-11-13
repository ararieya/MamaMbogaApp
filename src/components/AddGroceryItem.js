import { useState } from "react";

function AddGroceryItem({handleSaveGroceryItem}){

const groceryItem = {
    name: '',
    image: '',
    category: '',
    price: '',
};

const [formData, setFormData] = useState(groceryItem);
const handleInput = (e) => {
    // destructure name and value from e.target
    const { name, value } = e.target;

    // update the formData state with the new value
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    // prevent the default form behaviour which is reloading when submitted
    e.preventDefault();

    // pass the form data to app component
    handleSaveGroceryItem(formData);
     // reset the form by passing in the initial transaction values
     setFormData(groceryItem);
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div id = "add-form-div">
            <h2> Add a grocery item</h2>
                <input
                    className="add-form"
                    placeholder="name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                />
    
                <input
                    className="add-form"
                    placeholder="image-url"
                    required
                    name="image"
                    value={formData.image}
                    onChange={handleInput}
                />
    
                <input
                    className="add-form"
                    placeholder="category"
                    required
                    name="category"
                    value={formData.category}
                    onChange={handleInput}
                />
    
                <input
                    className="add-form"
                    type="number"
                    placeholder="price"
                    required
                    name="price"
                    value={formData.price}
                    onChange={handleInput}
                />
                <button
                className="btn btn-primary"
                type="submit">
                Add Grocery Item
                </button>
            </div>
        </form>
        </>
    )
    }
    
    export default AddGroceryItem;