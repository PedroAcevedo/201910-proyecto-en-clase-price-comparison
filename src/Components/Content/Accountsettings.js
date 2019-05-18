import React, { Component } from "react";
import {where,update} from './../../Services/firebase'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {AuthConsumer} from './../AuthContext';
import { Redirect } from 'react-router';
import Compress from 'compress.js'
const compress = new Compress()
class Accountsettings extends Component {
  
  constructor(){
    super()
    this.state={
      id:'',
      email:'',
      name:'',
      address:'',
      profileImage:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  

  handleChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
  }

  handleFile(e){
    e.persist()
    let reader = new FileReader()
    const files = [...e.target.files]
    compress.compress(files, {
      size: 4, 
      quality: .7, 
      maxWidth: 500, 
      maxHeight: 500, 
      resize: true, 
    })
    .then((data) => {
      let img = data[0]
      reader.readAsDataURL(Compress.convertBase64ToFile(img.data,img.ext))
      reader.onloadend = () => {
        this.setState({
          profileImage:reader.result
        })
      }
    })  	
    
  }

handleSubmit(e){
    e.preventDefault()
    const updates = {}; // this line is different
    if(this.state.name != ''){
      updates["/name"] = this.state.name;
    }
    if(this.state.address != ''){
      updates["/address"] = this.state.address;
    }
    updates["/profileImage"] = this.state.profileImage;
    update("Usuarios",this.state.id,updates)
    .then(()=>{
      NotificationManager.success('Datos actualizados', 'Scrappy')
      //this.props.history.push("/Profile");
    })
    .catch(error=>{
			console.log(error.message)
			NotificationManager.error('Error message', 'Ocurred an error')
    })
  }

  componentWillMount(){
    console.log(this.props.email)
    where("Usuarios","email",this.props.email)
    .on('value',snapshot=>{
      const usuario = snapshot.val();
      let user
      for(user in usuario){
        this.setState({
          id: user,
          name: usuario[user].name,
          email: usuario[user].email,
          address: usuario[user].address,
          profileImage: usuario[user].profileImage
        })
      }
      console.log(this.state.email)
    })
  }

  render() {
    return (
      <AuthConsumer>
        {({isAuth})=>(
          isAuth?
          <article className="accountsettings">
          <div>
          <NotificationContainer/>
          </div>
          {
            this.state.email &&
          <div>
           <h2 className="title">Configuración de cuenta</h2>
            <div className="container-flex-h">
              <div>
                <form className="form" onSubmit={this.handleSubmit}>
                  <div>
                    <label for="name" className="label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder={this.state.name}
                      id="name"
                      name="name"
                      title="Name"
                      onChange = {this.handleChange}
                    />
                  </div>
                  <div>
                  <label for="address" className="label">
                      Dirección
                  </label>
                    <input
                      type="text"
                      className="input"
                      placeholder={this.state.address}
                      id="address"
                      name="address"
                      title="address"
                      onChange = {this.handleChange}
                    />
                  </div>
                    <button className="button button-primary ">
                      Actualizar
                    </button>
                </form>
              </div>
          <label htmlFor="profile-image">
              <div className="profile-photo ">
                <img
                  className="profile-photo"
                  src={this.state.profileImage}
                />
                 <span>
                 <img
                  src={require("../../CSS/icons/PNG/pencil.png")}
                />
                </span>
              </div>
            </label>
            <input 
                  name="profile-image" 
                  id="profile-image" 
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={this.handleFile}
            />
            </div>
            </div>
          }
        </article>
      :
          <Redirect to="/" />
      )}
      </AuthConsumer>
    );
  }
}
export default Accountsettings;

