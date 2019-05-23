import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { create, removelist } from './../../../Services/api';
import { NotificationManager } from "react-notifications";
class Product extends Component {
  constructor(props){
    super(props)
    this.addToList = this.addToList.bind(this);
  }
  
  addToList(e){
    if(this.props.type=="Añadir"){
      create(`users/list/${this.props.userId}`,
      {
        "name": this.props.name,
        "brand": this.props.brand,
        "mark": this.props.mark,
        "price": this.props.price,
        "image": this.props.path,
        "shop": this.props.chain
      })
      .then( response => {
        return response.json();
      })
      .then( json => {
        console.log(json)
        NotificationManager.success("Producto añadido.", "Scrappy");
      })
    }else{
      removelist(`users/list/${this.props.userId}`,this.props.name)
      .then( response => {
        return response.json();
      })
      .then( json => {
        NotificationManager.error("Producto removido de la lista.", "Scrappy");
        this.props.action();
        console.log(json)
      })
    }
  }

  render() {
    let icon;
    if (this.props.type == "Remove") {
      icon = <i class="fas fa-trash-alt" />;
    } else {
      icon = <i className="fas fa-plus" />;
    }
    return (
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img className="img-card" variant="top" src={this.props.path} />
        <Card.Body className="body-card">
          <Card.Title>
            <strong>{this.props.name}</strong>
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Marca: </strong>
              {this.props.mark}
            </p>
            <p>
              <strong>Tienda: </strong>
              {this.props.shop}
            </p>
            <span>
              <strong>Precio: </strong>
              {this.props.price}
            </span>
          </Card.Text>
          <Button className={this.props.btn} onClick={this.addToList}>
            {icon}
            {this.props.type}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Product;
