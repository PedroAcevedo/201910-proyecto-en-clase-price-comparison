import React, { Component } from 'react'
import {profile,validateAuth,signOut} from './../Services/api'
const AuthContext = React.createContext()

class AuthProvider extends Component {
 
  constructor() {
    super()
    this.state = {  isAuth: false, email: '', user: []}
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(email){
    setTimeout(() => this.setState({ isAuth: true }), 1000)
    console.log(email)
    profile("users",email)
		.then( response => {
      return response.json();
    })
    .then( json => {
      this.state.user = []
      this.state.user.push(json)
      this.setState({ isAuth: true})
    }) 
    .catch(error=>{
			console.log(error.message)
    })
    this.setState({email: email})
  }

  logout() {
    this.setState({ isAuth: false })
    localStorage.clear();
    signOut()
  }

  componentDidMount(){
    validateAuth
    .then((user)=>{
        if(user!=null)
          this.setState({
            isAuth:true,
            email: user
        })
        if(this.state.user.length == 0){
          profile("users",this.state.email)
          .then( response => {
            return response.json();
          })
          .then( json => {
            this.state.user = []
            this.state.user.push(json)
            this.setState({ isAuth: true})
            console.log(this.state);
          }) 
          .catch(error=>{
            console.log(error.message)
          })
        }
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
          email: this.state.email,
          user: this.state.user
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
