import React, { Component } from "react";
import { Redirect } from "react-router";
import { AuthConsumer } from "../../AuthContext";
import List from "./List";
class History extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth }) =>
          isAuth ? (
            <section className="history">
              <div className="history-head">
                <p className="history-title">Historial de listas</p>
              </div>

              <div className="history-list">
                <List date="Mayo 8" price="$56900" />
                <List date="Mayo 8" price="$56900" />
                <List date="Mayo 8" price="$56900" />
              </div>
            </section>
          ) : (
            <Redirect to="/" />
          )
        }
      </AuthConsumer>
    );
  }
}
export default History;
