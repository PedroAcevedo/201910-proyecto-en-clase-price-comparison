import React, { Component } from "react";
import { Redirect } from "react-router";
import { AuthConsumer } from "./../AuthContext";
import { Button } from "react-bootstrap";
import Product from "./Catalogue/Product";

class Cart extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth }) =>
          isAuth ? (
            <section className="cart component-content">
              <div className="cart-head">
                <div class="left-info">
                  <p className="cart-title">Lista de compra</p>
                  <p className="cart-subtitle">
                    Última fecha de actualización: Marzo 5 del 2019
                  </p>
                </div>
                <div class="right-info">
                  <p className="price">
                    <strong>Precio total: </strong>$2345
                  </p>
                </div>
              </div>
              <div className="cart-body">
                <Product
                  name="Lechuga Roma de los Alpes de Imalaya"
                  mark="O"
                  shop="Olimpica"
                  price="$2000"
                  path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
                  btn="btn-card-less"
                  type="Remover"
                />
                <Product
                  name="Lechuga Roma de los Alpes de Imalaya"
                  mark="O"
                  shop="Olimpica"
                  price="$2000"
                  path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
                  btn="btn-card-less"
                  type="Remover"
                />
                <Product
                  name="Lechuga Roma de los Alpes de Imalaya"
                  mark="O"
                  shop="Olimpica"
                  price="$2000"
                  path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
                  btn="btn-card-less"
                  type="Remover"
                />

                <Product
                  name="Lechuga Roma de los Alpes de Imalaya"
                  mark="O"
                  shop="Olimpica"
                  price="$2000"
                  path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
                  btn="btn-card-less"
                  type="Remover"
                />
              </div>
              <div className="cart-footer">
                <Button className="btn-cart-save">
                  <i className="far fa-save" />
                  Descargar
                </Button>
              </div>
            </section>
          ) : (
            <Redirect to="/login" />
          )
        }
      </AuthConsumer>
    );
  }
}
export default Cart;
