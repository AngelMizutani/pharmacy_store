import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import AddProduct from "./components/add_product";
import AddUser from "./components/add_user";
import Sales from "./components/sales";

class App extends Component {
  render (){
    return (
      <div>
        <nav className="navbar navbar-expand navbar-success bg-success">
          <a href="/sales" className="navbar-brand">
            PharmacyStore
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add-product"} className="nav-link">
                Cadastrar Produto
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-user"} className="nav-link">
                Cadastrar usuário
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/sales"]} component={Sales} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/add-user" component={AddUser}/>
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
