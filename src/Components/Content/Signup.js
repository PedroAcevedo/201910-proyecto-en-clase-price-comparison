import React, { Component } from "react";
import { Link } from "react-router-dom";
import { create, createUser, where } from "../../Services/api";
import Compress from "compress.js";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
const compress = new Compress();
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      profileImage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.passwordConfirm === ""
    ) {
      NotificationManager.error("Campos vacios", "Scrappy");
    } else {
      if (this.state.password.length > 5) {
        if (this.state.password !== this.state.passwordConfirm) {
          NotificationManager.error("Las contraseñas no coinciden", "Scrappy");
        } else {
          where("users/login", this.state.email)
            .then(response => {
              return response.json();
            })
            .then(json => {
              if (json == null) {
                createUser({
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                  profileImage: this.state.profileImage,
                  admin: false
                }).then(response => {
                  NotificationManager.success("Usuario creado", "Scrappy");
                  this.setState({
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                    profileImage: ""
                  });
                  this.props.history.push("/Signin");
                });
              } else {
                NotificationManager.error(
                  "Este correo ya está registrado.",
                  "Scrappy"
                );
              }
            })
            .catch(error => {
              console.log(error);
              NotificationManager.error("Error al registrarse", "Scrappy");
            });
        }
      } else {
        NotificationManager.error(
          "Contraseña muy corta, por lo menos 6 caracteres",
          "Scrappy"
        );
      }
    }
  }
  render() {
    return (
      <article className="sign">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="title">Registro</h2>
          <div>
            <label for="name" className="label">
              Nombre
            </label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              id="name"
              name="name"
              title="Name"
              value={this.state.name}
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="Email" className="label">
              Correo
            </label>
            <input
              type="text"
              className="input"
              placeholder="Email"
              id="email"
              name="email"
              title="Email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              name="password"
              title="Password"
              value={this.state.password}
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="confirm-password" className="label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="input"
              placeholder="Confirm password"
              id="passwordConfirm"
              name="passwordConfirm"
              title="Confirm password"
              value={this.state.passwordConfirm}
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="input-image">
            <label htmlFor="profile-image">
              <span className="btn-profile btn-image">
                <i class="fas fa-image" />
                Cargar foto
              </span>
            </label>
            <input
              className="hidden"
              name="profile-image"
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={this.handleFile}
            />

            {this.state.profileImage && (
              <div>
                <img
                  className="image-upload"
                  src={this.state.profileImage}
                  alt="profile-imagen"
                />
              </div>
            )}
          </div>
          <div>
            <button type="submit" className="btn-profile ">
              Aceptar
            </button>
          </div>
          <div>
            <a>
              ¿Ya tienes cuenta?{" "}
              <Link className="link" to="/signin">
                Ingresar
              </Link>
            </a>
          </div>
        </form>
        <div>
          <NotificationContainer />
        </div>
      </article>
    );
  }
}
export default Signup;
