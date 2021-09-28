import {  Card,Button } from 'react-bootstrap';
const Producto=({producto})=>{
    return(

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto.image} style={{width:'50px'}} />
  <Card.Body>
    <Card.Title>{producto.nombreP}</Card.Title>
    <Card.Text>Precio: {producto.precio}</Card.Text>
    <Button variant="primary">Editar</Button>
  </Card.Body>
</Card>
    );
}
export default Producto;