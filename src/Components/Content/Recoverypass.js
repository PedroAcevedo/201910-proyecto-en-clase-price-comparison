import React, { Component } from "react";

class Recoverypass extends Component {
  render() {
    return (
      <article className="signin">
        <form className="form">
          <h2 className="title">Recuperación de contraseña</h2>

          <div>
            <label for="password" className="label">
              Nueva contraseña:
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              name="password"
              title="Password"
            />
          </div>
          <div>
            <label for="password" className="label">
              Verificar contraseña:
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              name="password"
              title="Password"
            />
          </div>
          <div>
            <button className="button button-primary button-large">
              Actualizar
            </button>
          </div>
        </form>
      </article>
    );
  }
}
export default Recoverypass;
