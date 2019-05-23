import React, { Component } from "react";
import { remove, removeScrappy, createTerm} from "../../../Services/api";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { Link } from "react-router-dom";

class Item_cat extends Component {
  constructor() {
    super();
    this.onClose = this.onClose.bind(this);
    this.update = this.update.bind(this);
  }


  update(e){
    for(var i=0; i < this.props.category.products.length; i++){
      setTimeout(createTerm(this.props.category.products[i].name), 5000)    
    }
    NotificationManager.success("Producto actualizado.", "Scrappy");
  }

  onClose(e) {
    remove({ name: this.props.category.name }).then(() => {
      NotificationManager.success("Categoria removida.", "Scrappy");
      this.props.action();
      for(var i=0; i < this.props.category.products.length; i++){
        removeScrappy(this.props.category.products[i].name);
      }
      console.log(this.props.category.name, "remove succesfully");
    });
  }

  render() {
    return (
      <tr>
        <td>
          <p>{this.props.category.name}</p>
          <p>Última actualización: {this.props.category.date}</p>
        </td>
        <td>
          <button className="button primary-button button-round" onClick={this.update}>
            <img
              className="image-button"
              src={require("../../../CSS/icons/PNG/loop2.png")}
            />
          </button>
        </td>
        <td>
          <Link
            to={`/products/${this.props.category._id},${
              this.props.category.name
            }`}
          >
            <button className="button primary-button button-round">
              <img
                className="image-button"
                src={require("../../../CSS/icons/PNG/pencil.png")}
              />
            </button>
          </Link>
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
export default Item_cat;
