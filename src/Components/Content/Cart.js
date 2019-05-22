import React, { Component } from "react";
import { Redirect } from "react-router";
import { AuthConsumer } from "./../AuthContext";

class Cart extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth }) =>
          isAuth ? (
            <section className="cart component-content">
              <div className="cart-head">
                <p className="cart-title">Lista de compra</p>
                <p className="cart-subtitle">
                  Última fecha de actualización: Marzo 5 del 2019
                </p>
              </div>

              <div className="cart-items item-list">
                <a className="item init">
                  <img
                    className="item-image"
                    src={require("../../Images/product.png")}
                  />
                  <p>Lechuga</p>
                </a>
                <a className="item">
                  <p>Carulla</p>
                  <p>$$$$$$$</p>
                </a>
                <a className="item selected">
                  <p>Carrefour</p>
                  <p>$$$$$$$</p>
                </a>
                <button className="button button-primary button-cancel">
                  X
                </button>
              </div>
              <div className="cart-items item-list">
                <a className="item init">
                  <img
                    className="item-image"
                    src={require("../../Images/product.png")}
                  />
                  <p>Lechuga</p>
                </a>
                <a className="item selected">
                  <p>Carulla</p>
                  <p>$$$$$$$</p>
                </a>
                <a className="item">
                  <p>Carrefour</p>
                  <p>$$$$$$$</p>
                </a>
                <a className="item ">
                  <p>Ara</p>
                  <p>$$$$$$$</p>
                </a>
                <a className="item ">
                  <p>Exito</p>
                  <p>$$$$$$$</p>
                </a>
                <button className="button button-primary button-cancel">
                  X
                </button>
              </div>
              <div className="cart-items item-list">
                <a className="item init">
                  <img
                    className="item-image"
                    src={require("../../Images/product.png")}
                  />
                  <p>Lechuga</p>
                </a>
                <a className="item">
                  <p>Carulla</p>
                  <p>$$$$$$$</p>
                </a>
                <a className="item">
                  <p>Carrefour</p>
                  <p>$$$$$$$</p>
                </a>
                <a className="item selected">
                  <p>Ara</p>
                  <p>$$$$$$$</p>
                </a>
                <button className="button button-primary button-cancel">
                  X
                </button>
              </div>
              <div className="buttons-cart">
                <button className="button button-primary search-button button-round">
                  <img
                    className="button-img"
                    src={require("../../CSS/icons/PNG/download3.png")}
                  />
                </button>
                <button className="button button-primary search-button button-round">
                  <img
                    className="button-img"
                    src={require("../../CSS/icons/PNG/floppy-disk.png")}
                  />
                </button>
              </div>
            </section>
          ) : (
            <Redirect to="/" />
          )
        }
      </AuthConsumer>
    );
  }
}
export default Cart;
