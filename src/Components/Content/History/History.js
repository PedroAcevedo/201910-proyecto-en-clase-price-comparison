import React, { Component } from "react";
import { Redirect } from "react-router";
import { AuthConsumer } from "../../AuthContext";
import { gethistorical } from './../../../Services/api';
import List from "./List";
class History extends Component {
  
  constructor(props){
    super(props)
    this.state={
      lists: []
    }
  }

  componentWillMount(){
    if(this.props._id){
      gethistorical("users/historical",this.props._id)
      .then((response) => {
          return response.json();
      }
      )
      .then((json)=>{
        this.setState({
          lists: json
        })
      })
    }
  }
  
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
                {
                  this.state.lists.length > 0 ? (
                    this.state.lists.map(list => {
                      return ( <List date={list.date} price={list.price} />)
                    })
                  )
                  :
                  <p>No hay listas guardadas</p>
                }

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
