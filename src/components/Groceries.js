import {Card}  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Groceries({filteredData , addToYourCart}){
    return(
      <>
        <h2>Groceries List</h2>
         <div className ='container-grocery'>
        {filteredData.map((grocery) => (
             <Card key={grocery.id} className='card-container' >
             <Card.Img variant="top" src={grocery.image} alt={grocery.name} className='grocery-image' />
             <Card.Body className="card-body">
               <Card.Title>{grocery.category}</Card.Title>
               <Card.Text className="card-text">
                 {grocery.name} <br/>
                 {`Price: ${grocery.price}`} <br/>
               </Card.Text>
               <Button variant="primary" onClick={() => addToYourCart(grocery)}>Add To Cart</Button>{' '}
             </Card.Body>
           </Card>
        ))}:
      </div>
      </>
    )
}

export default Groceries;