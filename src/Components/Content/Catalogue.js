import React, { Component } from "react";
import { Link } from "react-router-dom";

class Catalogue extends Component {
  render() {
    return (
      <section className="catalogue ">
        <div className="catalogue-head">
          <p className="catalogue-title">Catálogo de productos</p>
          <p className="catalogue-subtitle">
            Última fecha de actualización: Marzo 5 del 2019
          </p>
        </div>
        <div className="catalogue-items item-list">
          <a className="item">
            <img src={require("../../Images/product.png")} />
          </a>
          <a className="item">
            <img src={require("../../Images/product.png")} />
          </a>
          <a className="item">
            <img src={require("../../Images/product.png")} />
          </a>
          <a className="item">
            <img src={require("../../Images/product.png")} />
          </a>
          <a className="item">
            <img src={require("../../Images/product.png")} />
          </a>
          <a className="item">
            <img src={require("../../Images/product.png")} />
          </a>
        </div>
        <div className="cart">
          <Link to="/cart">
            <button className="button button-primary cart-button float">
              <img
                className="cart-button-icon"
                src={require("../../CSS/icons/PNG/cart.png")}
              />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}
export default Catalogue;
