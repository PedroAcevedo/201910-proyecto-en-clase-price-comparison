{}import React, { Component } from "react";
import { removeprods, removeScrappy, updateTerm } from "../../../Services/api";
import { NotificationManager } from "react-notifications";

class Item extends Component {
  constructor() {
    super();
    this.onClose = this.onClose.bind(this);
    this.update = this.update.bind(this);
  }

  onClose(e) {
    removeprods(`categories/${this.props.category}/products`, {
      name: this.props.product.name,
      date: this.props.product.date
    }).then(() => {
      NotificationManager.success("Producto removido.", "Scrappy");
      removeScrappy(this.props.product.name)
      .then(() => 
      { 
      this.props.action();
      }
      )
    });
  }

  update(e){
    updateTerm(this.props.product.name)
    .then((response)=>
    { 
      return response.json();
    })
    .then((json)=> {
      console.log(json);
    })
  }

  render() {
    return (
      <tr>
        <td>
          <p>{this.props.product.name} </p>
          <p>Última actualización: {this.props.product.date}</p>
        </td>
        <td>
          <button className="button primary-button button-round"
            onClick ={this.update}
          >
            <img
              className="image-button"
              src={require("../../../CSS/icons/PNG/loop2.png")}
            />
          </button>
        </td>
        <td>
          <button
            className="button primary-button button-round"
            onClick={this.onClose}
          >
            <img
              className="image-button"
              src={require("../../../CSS/icons/PNG/minus.png")}
            />
          </button>
        </td>
      </tr>
    );
  }
}
export default Item;