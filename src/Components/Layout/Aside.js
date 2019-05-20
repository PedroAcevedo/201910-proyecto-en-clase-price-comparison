import React, { Component } from "react";
import {list} from '../../Services/api';
class Aside extends Component {
  constructor(){
    super()		
    this.state = {
      categories : []
    }
  }

  
  componentWillMount(){
    list("categories")
		.then( response => {
      return response.json();
    })
    .then( json => {
      this.setState({
				categories: json
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
                        return  <li>
                                  <a>{products.name}</a>
                                </li>                      
                      })}    
                  </div>
                })
                
              :
              <p>No categories</p>
            } 
          </ul>
        </div>
      </section>
    );
  }
}
export default Aside;
