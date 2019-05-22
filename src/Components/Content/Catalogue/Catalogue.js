import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { Pagination } from "react-bootstrap";

class Catalogue extends Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    const paginationBasic = <Pagination size="sm">{items}</Pagination>;
    return (
      <section className="catalogue">
        <div className="catalogue-items item-list">
          <Product
            name="Lechuga Roma de los Alpes de Imalaya"
            mark="O"
            shop="Olimpica"
            price="$2000"
            path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
          />
          <Product
            name="Lechuga Roma de los Alpes de Imalaya"
            mark="O"
            shop="Olimpica"
            price="$2000"
            path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
          />
          <Product
            name="Lechuga Roma de los Alpes de Imalaya"
            mark="O"
            shop="Olimpica"
            price="$2000"
            path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
          />
          <Product
            name="Lechuga Roma de los Alpes de Imalaya"
            mark="O"
            shop="Olimpica"
            price="$2000"
            path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
          />
          <Product
            name="Lechuga Roma de los Alpes de Imalaya"
            mark="O"
            shop="Olimpica"
            price="$2000"
            path="https://comefruta.es/wp-content/uploads/lechugaromana.jpg"
          />
        </div>
        {paginationBasic}
      </section>
    );
  }
}
export default Catalogue;
