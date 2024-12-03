import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductModal from '../ProductModal/ProductModal'
import "./ProductCard.css"

function ProductCard({ product }) {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Card className="product-card">
      <Card.Img variant="top" src={product.images[0].replace(/^[\[\\"']+|[\]\\"']+$|\\\"/g, '')} alt={product.title} onError={event => {
          event.target.src = "https://i.imgur.com/QkIa5tT.jpeg"
          event.onerror = null
        }} />
      <Card.Body className="text-center">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 100)}...
        </Card.Text>
        <Card.Text>
          <strong>Price: </strong>${product.price}
        </Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)} >View Details</Button>
      </Card.Body>
    </Card>
    <ProductModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={product.id}
          />
    </>
    
  );
}

export default ProductCard;