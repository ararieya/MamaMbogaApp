import Card from 'react-bootstrap/Card';

function GroceriesList({ groceries }) { 
  return (
    <div className='container-grocery'>
      {groceries.map((grocery) => (
        <Card key={grocery.id} style={{ width: '18rem' }} className='card-container'>
          <Card.Img variant="top" src={grocery.image} alt={grocery.name} className='grocery-image' />
          <Card.Body className='container'>
            <Card.Title>{grocery.name}</Card.Title>
            <Card.Text>
              {grocery.category} <br />
              {grocery.price}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default GroceriesList;