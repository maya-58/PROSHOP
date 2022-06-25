import React,{useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../Rating";
//import products from "../../products";
import axios from 'axios'

const ProductScreen = ({ match }) => {
  const { id } = useParams();
  //console.log(id);
 // const product = products.find((p) => p._id === id);

 const [product,setProduct] = useState({})

 useEffect(()=>{
  const fetchProduct = async () => {
    const {data} = await axios.get(`/api/products/${id}`)

    setProduct(data)
  }
  fetchProduct()
},[])

  //console.log(product);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup varinat="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ₹{product.price}</ListGroup.Item>

            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

       <Col md={3}> 
       <Card>
        
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Col>
            Price:
            </Col>
            <Col>
            ₹{product.price}
            </Col>
         
          </ListGroup.Item>

          <ListGroup.Item>
            <Col>
            Status 
            </Col>
            <Col>
            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
            </Col>
         
          </ListGroup.Item>

          <ListGroup.Item>
            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
              Add to Cart
            </Button>

          </ListGroup.Item>
     
        </ListGroup>
       </Card>
       </Col>
        
      </Row>
    </>
  );
};

export default ProductScreen;
