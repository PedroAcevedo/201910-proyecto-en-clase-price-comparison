import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { create } from './../../../Services/api'
class Product extends Component {
  constructor(props){
    super(props)
    this.addToList = this.addToList.bind(this);
  }
  
  addToList(e){
    create(`users/list/${this.props.userId}`,
    {
      "name": this.props.name,
      "brand": this.props.brand,
      "mark": this.props.mark,
      "price": this.props.price,
      "image": this.props.path
    })
		.then( response => {
      return response.json();
    })
    .then( json => {
      console.log(json)
    })
  }

  render() {
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
          {
            this.props.button == true ?
              <Button className="btn-card-plus" onClick={this.addToList}>
                <i className="fas fa-plus" />
                Agregar
              </Button>
            :
            <Button className="btn-card-plus" >
            <i className="fas fa-plus" />
              Agregar
            </Button>
          }
        </Card.Body>
      </Card>
    );
  }
}
export default Product;
