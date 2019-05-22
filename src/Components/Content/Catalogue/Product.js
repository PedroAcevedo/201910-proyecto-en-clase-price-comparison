import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Product extends Component {
  render() {
    let icon;
    if (this.props.type == "Remove") {
      icon = <i class="fas fa-trash-alt" />;
    } else {
      icon = <i className="fas fa-plus" />;
    }
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
          <Button className={this.props.btn}>
            {icon}
            {this.props.type}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Product;
