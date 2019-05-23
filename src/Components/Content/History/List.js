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
        <button className="btn-cart-save">
          <i class="far fa-save" />
          Descargar
        </button>
      </div>
    );
  }
}
export default Product;
