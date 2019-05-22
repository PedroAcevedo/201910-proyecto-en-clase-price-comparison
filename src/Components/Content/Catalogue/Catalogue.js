import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { Pagination } from "react-bootstrap";
import { AuthConsumer } from "./../../AuthContext";
class Catalogue extends Component {
  constructor(props) {
    super(props);
  }

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
      <AuthConsumer>
        {({ isAuth, user }) => (
          <section className="catalogue">
            <div className="catalogue-items item-list">
              {this.props.products.length > 0 ? (
                this.props.products.map(product => {
                  return (
                    <Product
                      name={product.name}
                      mark={product.brand}
                      shop={product.chain}
                      price={product.price}
                      userId={user[0] != null ? user[0]._id : null}
                      path={product.image}
                      btn="btn-card-plus"
                      type="Añadir"
                      button={isAuth}
                    />
                  );
                })
              ) : (
                <p>No hay productos registrados</p>
              )}
            </div>
            {paginationBasic}
          </section>
        )}
      </AuthConsumer>
    );
  }
}
export default Catalogue;
