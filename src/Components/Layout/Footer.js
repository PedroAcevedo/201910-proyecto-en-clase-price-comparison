import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="copyright">Scrappy, 2019.</p>
          <ul className="list-footer">
            <li className="item-footer">
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
