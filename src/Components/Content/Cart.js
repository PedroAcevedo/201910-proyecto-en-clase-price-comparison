import React, { Component } from "react";
import { Redirect } from "react-router";
import { AuthConsumer } from "./../AuthContext";
import { Button } from "react-bootstrap";
import Product from "./Catalogue/Product";
import {getlist} from './../../Services/api';
import { NotificationContainer,NotificationManager } from "react-notifications";

class Cart extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      products: [],
      price: 0
    }
    this.refresh = this.refresh.bind(this)
  }

  refresh(){
    if(this.props._id){
      getlist("users/list",this.props._id)
      .then((response) => {
          return response.json();
      }
      )
      .then((json)=>{
        console.log(json)
        this.setState({
          products: json["products"],
          date: json["date"]
        })
        var total = 0
        for(var products in json["products"]){

          total =  total + parseInt(json["products"][products]["price"],10)
        }
        this.setState({
          price: total
        })
      })
    }
  }

  componentWillMount(){
    this.refresh();
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuth, user}) =>
          isAuth ? (
            <section className="cart component-content">
              <div className="cart-head">
                <div class="left-info">
                  <p className="cart-title">Lista de compra</p>
                  <p className="cart-subtitle">
                    Última fecha de actualización: {this.state.date}
                  </p>
                </div>
                <div class="right-info">
                  <p className="price">
                    <strong>Precio total: </strong>${this.state.price}
                  </p>
                </div>
              </div>
              <div className="cart-body">
              {this.state.products.length > 0 ? (
                this.state.products.map(products => {
                  return (
                    <Product
                      name = {products.name}
                      mark= {products.mark}
                      shop= {products.shop}
                      price={products.price}
                      userId={user[0] != null ? user[0]._id : null}
                      path={products.image}
                      btn="btn-card-less"
                      type="Remover"
                      action = {this.refresh}
                    />
                  );
                })
              ) : (
                <p>No hay categorias registradas.</p>
              )}
              </div>
              <div className="cart-footer">
                <Button className="btn-cart-save">
                  <i className="far fa-save" />
                  Descargar
                </Button>
              </div>
              <div>
                <NotificationContainer/>
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
