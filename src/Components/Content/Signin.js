import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthConsumer } from "./../AuthContext";
import { signIn } from "./../../Services/api";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      admin: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e, login, isAuth) {
    e.preventDefault();
    signIn(this.state.email, this.state.password)
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json["login"] == true) {
          localStorage.setItem("user", this.state.email);
          localStorage.setItem("token", json["token"]);
          if (json["admin"] == true) {
            this.setState({
              admin: true
            });
          }
          login(this.state.email);
          NotificationManager.success("Ingreso exitoso", "Scrappy");
        } else {
          NotificationManager.error(
            "Usuario o contraseña incorrectas",
            "Scrappy"
          );
        }
      })
      .catch(error => {
        console.log(error.message);
        NotificationManager.error("Error message", "Ocurred an error");
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <AuthConsumer>
        {({ login, isAuth }) =>
          isAuth ? (
            <div>
              {this.state.admin ? (
                <Redirect to="/Adminprofile" />
              ) : (
                <Redirect to="/" />
              )}
            </div>
          ) : (
            <div className="sign">
              <form
                className="form"
                onSubmit={e => this.handleSubmit(e, login, isAuth)}
              >
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
                  <button className="btn-profile">Sign In</button>
                </div>
                <div>
                  <a>
                    ¿Aun no tienes cuenta?{" "}
                    <Link className="link" to="/signup">
                      Registrate
                    </Link>
                  </a>
                </div>
              </form>
              <div>
                <NotificationContainer />
              </div>
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}
export default Signin;
