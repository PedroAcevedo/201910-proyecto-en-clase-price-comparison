import React, { Component } from "react";
import { AuthConsumer } from "./../AuthContext";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }
  logout(e, logout) {
    logout();
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuth, logout }) => (
          <header className="header container ">
            <div className="logo">
              <img src={require("../../Images/logo.png")} />
              <h3>SCRAPPY</h3>
            </div>
            <nav className="nav-bar">
              <Link to="/" className="nav-item">
                <i class="fas fa-store" />
                Catálogo
              </Link>
              <Link to="/cart" className="nav-item">
                <i class="fas fa-list-ul" />
                Lista
              </Link>
              <Link to="/history" className="nav-item">
                <i class="fas fa-history" />
                Historial
              </Link>
              <Link to="/profile" className="nav-item">
                <i class="fas fa-user" />
                Perfil
              </Link>
              {isAuth ? (
                <a className="nav-item" onClick={e => this.logout(e, logout)}>
                  <i class="fas fa-sign-in-alt" />
                  Logout
                </a>
              ) : (
                <Link to="/signin" className="nav-item">
                  <i class="fas fa-sign-in-alt" />
                  Login
                </Link>
              )}
            </nav>
          </header>
        )}
      </AuthConsumer>
    );
  }
}
export default Header;
