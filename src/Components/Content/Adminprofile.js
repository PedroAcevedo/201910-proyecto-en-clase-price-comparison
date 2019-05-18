import React, { Component } from "react";
import {create} from '../../Services/firebase'
import { Link } from "react-router-dom";
import {list} from '../../Services/firebase';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Item_cat from './Item_cat';

class Adminprofile extends Component {
  constructor(){
		super()		
		this.state = {
      create_cat:false,
      name_cat:'',
      categories:[]		
    }		
    this.add_category = this.add_category.bind(this) 
    this.handleChange = this.handleChange.bind(this)		
    this.handleSubmit = this.handleSubmit.bind(this) 
    this.onClose = this.onClose.bind(this) 
  }

  add_category(e){
    this.setState({
      create_cat:!this.state.create_cat
    })
  }
  
  handleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
  }
  
	handleSubmit(e){
		e.preventDefault()
		if(this.state.name_cat===''){
			NotificationManager.error('Ingrese todo los campos', 'scrappy');
		}else{
      var months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')
      var fecha_actual = new Date();
      const category = {
        nombre:this.state.name_cat,
        fecha: fecha_actual.getDate() + " de " + months[fecha_actual.getMonth()] + " del " + fecha_actual.getFullYear(),
			}
			create('Categorias',category)
			.then(()=>{
				this.setState({
          name_cat:'',
          create_cat:false
          
        })
        NotificationManager.success('Categoria registrada', 'scrappy');
			})
		}	
  }

  onClose(e){
    this.setState({
      name_cat:'',
      create_cat:false,
      categories:this.state.categories
    })
  }

  componentDidMount(){
		list('Categorias')
		.on('value',snapshot=>{
			const categories = snapshot.val()
			let category, tmp=[]
			for(category in categories){
				tmp.push({
					id:category,
          name:categories[category].nombre,
          fecha:categories[category].fecha
				})
			}
			this.setState({
        name_cat:'',
        create_cat:false,
				categories:tmp
			})
		})
  }
  
  render() {
    
    return (
    <div>
      <article className="adminprofile">
        <p className="title">Administrador</p>
        <button className="button button-primary float"
        onClick={this.add_category}>
          + Crear categoría
        </button>
        <div Style="display:flex;flex-direction:row;">
        <table className="table-categories">
                  <tr>
                    <th>Categorías</th>
                    <th>Actualizar</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
          { this.state.categories.length > 0 ?
							this.state.categories.map(category=>{								
                return(
                    <Item_cat category = {category} />
                )
							})
						:
							<p>No hay categorias registradas.</p>	
          }
        </table>
        { 
        this.state.create_cat === true && 
        <form onSubmit={this.handleSubmit}>
          <table className="table-categories">
          <tr>
            <th>Categorías</th>
            <th>Agregar</th>
            <th>Eliminar</th>
          </tr>
          <tr>
            <td>
            <lable htmlfor="name_cat">
            Nombre:
            <input 
            type="text" 
            name="name_cat"
            id="name_cat"
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
              <NotificationContainer />
      </div>
      </div>
    );
  }
}
export default Adminprofile;
