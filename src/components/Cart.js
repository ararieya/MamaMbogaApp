import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Cart({selectedGroceries, removeFromYourCart}){
    return(
        <>
          <h2>Your Cart</h2>
    <div className ='cart-container'>
    {selectedGroceries.map((grocery) => (
            <Card key={grocery.id} className='card-container' onClick={() => removeFromYourCart(grocery.id)}>
            <Card.Img variant="top" src={grocery.image} alt={grocery.name} className='grocery-image' />
            <Card.Body className="card-body">
            <Card.Title>{grocery.category}</Card.Title>
            <Card.Text className="card-text">
              {grocery.name} <br/>
              {`Price: ${grocery.price}`}
            </Card.Text>
            <Button variant="primary" onClick={() => removeFromYourCart(grocery)}> Remove from Cart</Button>{' '}
          </Card.Body>
        </Card>
      ))}
    </div>
    
         </>
    )
}

export default Cart;