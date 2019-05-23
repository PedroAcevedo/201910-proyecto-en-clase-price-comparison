import React, { Component } from "react";
import { profile, update } from "./../../Services/api";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { AuthConsumer } from "./../AuthContext";
import { Redirect } from "react-router";
import Compress from "compress.js";
const compress = new Compress();
class Accountsettings extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      email: "",
      name: "",
      address: "",
      profileImage: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFile(e) {
    e.persist();
    let reader = new FileReader();
    const files = [...e.target.files];
    compress
      .compress(files, {
        size: 4,
        quality: 0.7,
        maxWidth: 500,
        maxHeight: 500,
        resize: true
      })
      .then(data => {
        let img = data[0];
        reader.readAsDataURL(Compress.convertBase64ToFile(img.data, img.ext));
        reader.onloadend = () => {
          this.setState({
            profileImage: reader.result
          });
        };
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    update({
      email: this.state.email,
      name: this.state.name,
      profileImage: this.state.profileImage,
      address: this.state.address
    })
      .then(() => {
        NotificationManager.success("Datos actualizados", "Scrappy");
        this.props.history.push("/Signin");
      })
      .catch(error => {
        console.log(error.message);
        NotificationManager.error("Error message", "Ocurred an error");
      });
  }

  componentWillMount() {
    profile("users", this.props.email)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          id: json["_id"],
          name: json["name"],
          email: json["email"],
          address: json["address"],
          profileImage: json["profileImage"]
        });
      });
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuth }) =>
          isAuth ? (
            <div className="accountsettings">
              <div>
                <NotificationContainer />
              </div>
              {this.state.email && (
                <div>
                  <h2 className="title">Configuración de cuenta</h2>
                  <div className="container-flex-v">
                    <label htmlFor="profile-image" className="profile-image">
                      <div className="profile-photo ">
                        <img
                          className="profile-photo"
                          src={this.state.profileImage}
                        />
                        <i class="fas fa-image" />
                      </div>
                    </label>
                    <input
                      name="profile-image"
                      id="profile-image"
                      className="hidden"
                      type="file"
                      accept="image/*"
                      onChange={this.handleFile}
                    />
                    <div>
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div>
                          <label for="name" className="label">
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="input"
                            placeholder={this.state.name}
                            id="name"
                            name="name"
                            title="Name"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div>
                          <label for="address" className="label">
                            Dirección
                          </label>
                          <input
                            type="text"
                            className="input"
                            placeholder={this.state.address}
                            id="address"
                            name="address"
                            title="address"
                            onChange={this.handleChange}
                          />
                        </div>
                        <button className="btn-profile">Actualizar</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Redirect to="/" />
          )
        }
      </AuthConsumer>
    );
  }
}
export default Accountsettings;
