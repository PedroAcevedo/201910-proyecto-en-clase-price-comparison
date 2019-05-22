import React, { Component } from "react";
import {list} from '../../Services/api';
import Item from './Item';
class Aside extends Component {
  constructor(){
    super()		
    this.state = {
      categories : [],
      loading: true
    }
  }

  
  componentWillMount(){
    list("categories")
		.then( response => {
      return response.json();
    })
    .then( json => {
      this.setState({
        categories: json,
        loading: false
      })
    })
    .catch(error=>{
			console.log(error.message)
    })
  }
  
  render() { 
    return (
      <section className="left-aside">
        <div>
          <a className="head-categories">Categorías</a>
          <ul>
            {
              this.state.categories.length > 0?
                this.state.categories.map(category=>{
                  return <div>
                    <a className="section-categories">{category.name}</a>
                        {category.products.map(products=>{
                        return  <Item name={products.name} action={this.props.action}/>                    
                        })}    
                    </div>
                })
                
              :
              <div className="sk-circle">
                <div className="sk-circle1 sk-child" />
                <div className="sk-circle2 sk-child" />
                <div className="sk-circle3 sk-child" />
                <div className="sk-circle4 sk-child" />
                <div className="sk-circle5 sk-child" />
                <div className="sk-circle6 sk-child" />
                <div className="sk-circle7 sk-child" />
                <div className="sk-circle8 sk-child" />
                <div className="sk-circle9 sk-child" />
                <div className="sk-circle10 sk-child" />
                <div className="sk-circle11 sk-child" />
                <div className="sk-circle12 sk-child" />
             </div>
            } 
          </ul>
        </div>
      </section>
    );
  }
}
export default Aside;
