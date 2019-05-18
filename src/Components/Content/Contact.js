import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div>
          <a
            href="https://github.com/DinoPerez25/201910-proyecto-en-clase-price-comparison"
            target="_blank"
          >
            <button className="button button-round">
              <img src={require("../../CSS/icons/PNG/github.png")} />
            </button>
          </a>
        </div>
      </section>
    );
  }
}
export default Contact;
