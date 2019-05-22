import React, { Component } from "react";
import {listScrappy} from './../../Services/api'
import Catalogue from "../Content/Catalogue/Catalogue";
import Aside from "./Aside";
class Container extends Component {
  
  constructor(){
    super()	
    this.state = {
      products : [],
      loading: true
    }
    this.consumeScrappy = this.consumeScrappy.bind(this);
    this.onClickProduct = this.onClickProduct.bind(this);
  }

  consumeScrappy(product,page){
    listScrappy(product,page)
    .then( response => {
      return response.json();
    })
    .then( json => {
      console.log(json)
      this.setState({
        products: json.data,
        loading: false
      })
    })
    .catch(error=>{
			console.log(error)
    })
  }

  onClickProduct(product){
    this.setState({
      loading: true
    })
    this.consumeScrappy(product,"1")
  }

  componentWillMount(){
    this.consumeScrappy("Res","1")
  }
   
  render() {
    return (
      <section className="main-content">
        <Aside action={this.onClickProduct}/>
         { 
              this.state.products.length &&
              <Catalogue products={this.state.products} />
         } 
      </section>
    );
  }
}
export default Container;
