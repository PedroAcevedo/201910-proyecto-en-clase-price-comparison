import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthConsumer } from "./../AuthContext";

const AuthContext = React.createContext();

class Profile extends Component {
  static contextType = AuthContext;

  constructor() {
    super();
    this.state = {
      id: "",
      email: "",
      address: "",
      profileImage: ""
    };
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuth, user }) =>
          isAuth ? (
            <article className="profile">
              {this.state.email == "" && (
                <div>
                  <h2 className="title">Perfil: {user[0].name}</h2>
                  <div className="profile-body">
                    <div className="profile-photo ">
                      <picture>
                        <img
                          className="profile-photo"
                          src={user[0].profileImage}
                        />
                      </picture>
                    </div>
                    <div className="info-profile">
                      <label for="name" className="label">
                        <strong>E-mail: </strong> {user[0].email}
                      </label>
                      <div className="info-profile">
                        <label for="name" className="label">
                          <strong>Dirección: </strong> {user[0].address}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to="/accountsettings">
                      <button className="btn-profile">
                        <i class="fas fa-cog" />
                        Configuración
                      </button>
                    </Link>
                    <Link to="/history">
                      <button className="btn-profile">
                        <i class="fas fa-history" />
                        Historial
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </article>
          ) : (
            <Redirect to="/" />
          )
        }
      </AuthConsumer>
    );
  }
}
export default Profile;
