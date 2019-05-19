import React, { Component } from "react";
import { Link } from "react-router-dom";
import {create} from '../../Services/api';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {list} from '../../Services/api';
import Item from './Item';

class Products extends Component {
  
  constructor(){
		super()		
		this.state = {
      create_prod:false,
      name_prod:'',
      products:[]		
    }		
    this.add_product = this.add_product.bind(this) 
    this.handleChange = this.handleChange.bind(this)		
    this.handleSubmit = this.handleSubmit.bind(this) 
    this.onClose = this.onClose.bind(this) 
  }

  add_product(e){
    this.setState({
      create_prod:!this.state.create_prod
    })
  }
  
  handleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
  }
  
	handleSubmit(e){
		e.preventDefault()
		if(this.state.name_prod===''){
			NotificationManager.error('Llene los campos requeridos', 'Scrappy');
		}else{
      var months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')
      var fecha_actual = new Date();
			const producto = {
        name:this.state.name_prod,
        date: fecha_actual.getDate() + " de " + months[fecha_actual.getMonth()] + " del " + fecha_actual.getFullYear(),
			}
			create(`categories/${this.props.match.params.id}/products`,producto)
			.then(()=>{
				this.setState({
          name_prod:'',
          create_prod:false
        })
        NotificationManager.success('Producto registrado.', 'Scrappy');
			})
		}	
  }

  onClose(e){
    this.setState({
      name_prod:'',
      create_prod:false,
      products:this.state.products
    })
  }

  componentDidMount(){
    list(`categories/${this.props.match.params.id}/products`)
		.then( response => {
      return response.json();
    })
    .then( json => {
      console.log(json)
			this.setState({
        name_prod:'',
        create_prod:false,
				products:json
			});
    })

  }

  render() {
    return (
      <div >
        <article className="adminprofile">
        <p className="title">Categoría: {this.props.match.params.cat}</p>
        <button className="button button-primary float"
        onClick={this.add_product}>
          + Crear nuevo producto
        </button>
        <div Style="display:flex;flex-direction:row;">
        <table className="table-categories">
                  <tr>
                      <th>{this.props.match.params.cat}</th>
                      <th>Actualizar</th>
                      <th>Eliminar</th>
                  </tr>
        { this.state.products.length > 0 ?
							this.state.products.map(product=>{								
                return(
                    <Item key={product.key} product={product} category={this.props.match.params.id} /> 
									)
							})
						:
						<p>No hay productos registrados</p>	
        }
      </table>
      { 
      this.state.create_prod === true &&
      <form onSubmit={this.handleSubmit}>
      <table className="table-categories">
        <tr>
          <th>{this.props.match.params.cat}</th>
          <th>Agregar</th>
          <th>Cancelar</th>
        </tr>
        <tr>
          <td>
            <lable htmlfor="name_prod">
            Nombre:
            <input 
            type="text" 
            name="name_prod"
            id="name_prod"
            onChange={this.handleChange}></input>
            </lable>
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
            <button className="button primary-button button-round" onClick={this.onClose}>
              <img
                className="image-button"
                src={require("../../CSS/icons/PNG/minus.png")}
              />
            </button>
          </td>
          </tr>
        </table>
      </form>
      }
      </div>
        <div className="loginsButtons">
          <a className="link " href="#">
            <Link to="/profile" className="nav-link">
              Usuario
            </Link>
          </a>
        </div>
      </article>
      <div>
      <NotificationContainer/>
      </div>
      </div>
     
    );
  }
}
export default Products;
