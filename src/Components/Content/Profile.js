import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { AuthConsumer} from './../AuthContext';

const AuthContext = React.createContext()


class Profile extends Component {
  static contextType = AuthContext;
  
  constructor(){  
    super()
    this.state = {
      id: '',
      email: '',
      address: '',
      profileImage: ''  
    }
  }

  render() {
    return (
      <AuthConsumer>
      {({isAuth,user}) => (
                      isAuth?
                        <article className="profile">
                          {
                            this.state.email=="" &&
                            <div>
                              <div>
                                <h2 className="title">{user[0].name}</h2>
                              </div>
                              <div className="container-flex-h">
                                <div className="container-flex-v">
                                  <div className="info-profile">
                                    <label for="name" className="label">
                                      E-mail:
                                    </label>
                                     <label for="name" 
                                     className="label"
                                     >
                                     {user[0].email}         
                                     </label>
                                     <div className="info-profile">
                                     <label for="name" className="label">
                                       Dirección:
                                     </label>
                                     <label for="name" className="label">
                                       {user[0].address}
                                     </label>
                                    </div>
                                    </div>
                                </div>
                                  <div className="profile-photo ">
                                   <picture>
                                   <img
                                     className="profile-photo"
                                     src={user[0].profileImage}
                                   />
                                   </picture>
                                 </div>
                              </div>
                              <div>
                                <Link to="/accountsettings">
                                  <button className="button button-primary">Configuración</button>
                                </Link>
                                <Link to="/history">
                                  <button className="button button-primary">Historial</button>
                                </Link>
                              </div>
                              <div className="loginsButtons">
                                <a className="link " href="#">
                                  <Link to="/adminprofile" className="nav-link">
                                    Administrador
                                  </Link>
                                </a>
                                <a>/</a>
                                <a className="link " href="#">
                                  <Link to="/recoverypass" className="nav-link">
                                    Recuperacion de contraseña
                                  </Link>
                                </a>
                              </div>
                            </div>
                          }
                        </article>
                              :
                               <Redirect to="/"/>

      )}
      </AuthConsumer>
    );
  }
}
export default Profile;
