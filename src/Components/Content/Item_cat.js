import React, { Component } from "react";
import {remove} from '../../Services/api';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from "react-router-dom";

class Item_cat extends Component {
    constructor(){
        super()		
        this.onClose = this.onClose.bind(this) 
    }
    
    onClose(e){
        remove({"name": this.props.category.name})
        .then(()=>{
            NotificationManager.success('Categoria removida.', 'Scrappy');
            console.log(this.props.category.name,"remove succesfully")
        })
     }

    render() {
    return (
        <tr>
        <td>
          <p>{this.props.category.name}</p>
          <p>Última actualización: {this.props.category.date}</p>
        </td>
        <td>
          <button className="button primary-button button-round">
            <img
              className="image-button"
              src={require("../../CSS/icons/PNG/loop2.png")}
            />
          </button>
        </td>
        <td>
          <Link to={`/products/${this.props.category._id},${this.props.category.name}`}>
            <button className="button primary-button button-round">
              <img
                className="image-button"
                src={require("../../CSS/icons/PNG/pencil.png")}
              />
            </button>
          </Link>
        </td>
        <td>
          <button className="button primary-button button-round" onClick={this.onClose}>
            <img
              className="image-button"
              src={require("../../CSS/icons/PNG/minus.png")}
            />
          </button>
        </td>
    </tr>
    );
  }
}
export default Item_cat;
