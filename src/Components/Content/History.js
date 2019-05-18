import React, { Component } from "react";
import { Redirect } from 'react-router';
import { AuthConsumer } from './../AuthContext';
class History extends Component {
  render() {
    return (
    <AuthConsumer>
      {({isAuth}) => (
                              isAuth?
                              <section className="history">
                              <div className="history-head">
                                <p className="history-title">Historial de listas</p>
                                <p className="history-subtitle">Camilo Alejandro Perez V.</p>
                              </div>
                      
                              <div className="history-list">
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                                <div className="list">
                                  <div>
                                    <p>Lista de compra: Febrero 5 del 2019</p>
                                    <p>Precio total: $$$$$$$</p>
                                  </div>
                      
                                  <div>
                                    <button className="button button-primary button-round">
                                      <img src={require("../../CSS/icons/PNG/download3.png")} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </section>
                          :
                                <Redirect to="/"/>
      )}
    </AuthConsumer>
    );
  }
}
export default History;
