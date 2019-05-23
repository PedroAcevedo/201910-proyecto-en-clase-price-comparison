import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        <p>
          <strong>Fecha: </strong>
          {this.props.date}
        </p>
        <p>
          <strong>Precio: </strong> {this.props.price}
        </p>
      </div>
    );
  }
}
export default Product;
