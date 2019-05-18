import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { AuthConsumer } from './../AuthContext';
import {signIn} from './../../Services/api';
import {NotificationManager,NotificationContainer } from "react-notifications";

class Signin extends Component {
  
  constructor(){
		super()
		this.state = {
			email: '',
			password:''
		}
		this.handleChange = this.handleChange.bind(this)
	}
  
  handleSubmit(e,login,isAuth){
    e.preventDefault()
  	signIn(this.state.email,this.state.password)
    .then(()=>{
			localStorage.setItem("user", this.state.email)
      login()
      NotificationManager.success('Ingreso exitoso', 'Scrappy')
    })
		.catch(error=>{
			console.log(error.message)
			NotificationManager.error('Error message', 'Ocurred an error')
    })
  }
  
  
  handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		  })
  }

  render() {
    return (
      <AuthConsumer>
          {({ login,isAuth}) => (
                                    isAuth? 
                                      <Redirect to="/"/>
                                    :
                                    <article className="signin">
                                      <form className="form" onSubmit={(e)=>this.handleSubmit(e,login,isAuth)}>
                                        <h2 className="title">Sign In</h2>
                                        <div>
                                          <label for="email" className="label">
                                            Correo
                                          </label>
                                          <input
                                            type="text"
                                          className="input"
                                            placeholder="email"
                                            id="email"
                                            name="email"
                                            title="Email"
                                            value={this.state.email}
                                            required
                                            onChange={this.handleChange}
                                          />
                                        </div>
                                        <div>
                                          <label for="password" className="label">
                                            Password
                                          </label>
                                          <input
                                            type="password"
                                            className="input"
                                            placeholder="Password"
                                            id="password"
                                            name="password"
                                            title="Password"
                                            value={this.state.password}
                                            required
                                            onChange={this.handleChange}
                                          />
                                        </div>
                                        <div>
                                          <button className="button button-primary button-large">
                                            Sign In
                                          </button>
                                        </div>
                                        <div>
                                          <a>
                                            ¿Aun no tienes cuenta? <Link to="/signup">Registrate</Link>
                                          </a>
                                        </div>
                                      </form>
                                      <div>
                                        <NotificationContainer/>
                                      </div>
                                  </article>
          )}
      </AuthConsumer>
    );
  }
}
export default Signin;
