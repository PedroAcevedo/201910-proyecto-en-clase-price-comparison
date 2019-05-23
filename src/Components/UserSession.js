import React, { Component } from "react";
import { Route } from "react-router-dom";

import Cart from "./Content/Cart";
import List from "./Content/Contact";
import Profile from "./Content/Profile";
import History from "./Content/History";
import Recoverypass from "./Content/Recoverypass";
import Accountsettings from "./Content/Accountsettings";

import {AuthConsumer} from "./AuthContext";

class UserSession extends Component {
  render() {
    return (
      <AuthConsumer>
          {context => (
            <main>
              <Route path="/cart" component={() => <Cart _id = {context.id} />} />
              <Route path="/list" component={List} />
              <Route path="/profile"  component={() => <Profile email = {context.email} />} />
              <Route path="/history" component={() => <History _id = {context.id} />} />
              <Route path="/recoverypass" component={Recoverypass} />
              <Route path="/accountsettings" component={() => <Accountsettings email = {context.email} />}  />
            </main>
          )}
      </AuthConsumer>
    );
  }
}
export default UserSession;
