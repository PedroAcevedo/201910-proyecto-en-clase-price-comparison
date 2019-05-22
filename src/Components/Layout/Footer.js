import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="copyright">Scrappy, 2019.</p>
          <i class="fab fa-github" />
          <p>By Pedro Acevedo, Carlos Conrado y Dinorah Perez.</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
