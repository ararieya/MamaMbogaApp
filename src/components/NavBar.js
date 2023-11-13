import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "10px 0px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  function NavBar(){
    return(
      
        <div id= "header">
          <h1>MamaMboga</h1>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Cart"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Cart
      </NavLink>
      <NavLink
        to="/Comments"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Comment
      </NavLink>
      <NavLink
        to="/Add Grocery Item"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
          }}
        >
        Add Grocery Item
      </NavLink>
        </div>
        )
  }

  export default NavBar;

