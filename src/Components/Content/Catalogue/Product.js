import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Product extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img className="img-card" variant="top" src={this.props.path} />
        <Card.Body className="body-card">
          <Card.Title>
            <strong>{this.props.name}</strong>
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Marca: </strong>
              {this.props.mark}
            </p>
            <p>
              <strong>Tienda: </strong>
              {this.props.shop}
            </p>
            <span>
              <strong>Precio: </strong>
              {this.props.price}
            </span>
          </Card.Text>
          <Button className="btn-card-plus">
            <i className="fas fa-plus" />
            Agregar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Product;
