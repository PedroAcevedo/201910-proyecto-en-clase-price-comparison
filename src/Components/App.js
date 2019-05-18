import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Container from "./Layout/Container";
import Signin from "./Content/Signin";
import Signup from "./Content/Signup";
import Adminprofile from "./Content/Adminprofile";
import Products from "./Content/Products";
import Contact from "./Content/Contact";
import UserSession from "./UserSession";
import {AuthProvider} from "./AuthContext";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <main>
            <Header />
            <Route exact path="/" component={Container}  />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <UserSession />
            <Route path="/adminprofile" component={Adminprofile} />
            <Route path="/products/:id,:cat" component={Products} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </main>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}
export default App;
