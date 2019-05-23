{
}
import React, { Component } from "react";
import { removeprods, removeScrappy, createTerm } from "../../../Services/api";
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
      removeScrappy(this.props.product.name).then(() => {
        this.props.action();
      });
    });
  }

  update(e) {
    createTerm(this.props.product.name)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        NotificationManager.success("Producto actualizado.", "Scrappy");
      });
  }

  render() {
    return (
      <tr>
        <td>
          <p>{this.props.product.name} </p>
          <p>Última actualización: {this.props.product.date}</p>
        </td>
        <td>
          <button className="btn-profile" onClick={this.update}>
            <i class="fas fa-sync-alt" />
          </button>
        </td>
        <td>
          <button className="btn-del" onClick={this.onClose}>
            <i class="fas fa-trash-alt" />
          </button>
        </td>
      </tr>
    );
  }
}
export default Item;
