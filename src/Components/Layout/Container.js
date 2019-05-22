import React, { Component } from "react";

import Catalogue from "../Content/Catalogue/Catalogue";
import Aside from "./Aside";
class Container extends Component {
  render() {
    return (
      <section className="main-content">
        <Aside />
        <Catalogue />
      </section>
    );
  }
}
export default Container;
