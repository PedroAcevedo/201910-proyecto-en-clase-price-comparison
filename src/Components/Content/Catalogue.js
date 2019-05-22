import React, { Component } from "react";
import { Link } from "react-router-dom";
import {listScrappy} from './../../Services/api'
class Catalogue extends Component {
  constructor(){
    super()	
    this.state = {
      products : []
    }
  }

  componentWillMount(){
    listScrappy("pollo","2")
    .then( response => {
      return response.json();
    })
    .then( json => {
      console.log(json)
      this.setState({
				products: json
      })
    })
    .catch(error=>{
			console.log(error.message)
    })
  }
   
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
        {
           this.state.products.length > 0 ?
           this.state.products.map(product=>{								
             return(
              <a className="item">
              <img src={require(product.image)} />
             </a>
               )
           })
         :
         <p>No hay productos registrados</p>	
        }
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
