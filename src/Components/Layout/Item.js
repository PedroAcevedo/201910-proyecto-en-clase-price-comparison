import React, { Component } from "react";

class Item extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);		
  }

  
  onClick(){
    this.props.action(this.props.name)
  }

  render() { 
    return (
        <li onClick={this.onClick}>
            <a>{this.props.name}</a>
        </li>                      
    );
  }
}
export default Item;
