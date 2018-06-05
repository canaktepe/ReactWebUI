import React, { Component } from 'react';
import { Tbl } from './Tbl'
import logo from './logo.svg';
import $ from "jquery";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Dialog } from './Dialog';
import {NewProductForm} from './DialogForms/NewProduct'

const apiURL = "http://85.96.194.128:5000/api/products";

class NewProduct extends Component {
  handleSubmit = function (e) {
    e.preventDefault();
    const data = $("form").serialize();
    fetch(apiURL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (typeof result !== 'object') {
            alert(result)
            return;
          }
          this.props.pushElement(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group row">
          <label htmlFor="ProductName" className="col-sm-2 col-form-label">Product Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="ProductName" id="ProductName" placeholder="Product Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="QuantityPerUnit" className="col-sm-2 col-form-label">Quantity Per Unit</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="QuantityPerUnit" id="QuantityPerUnit" placeholder="Quantity Per Unit" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="UnitPrice" className="col-sm-2 col-form-label">Unit Price</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="UnitPrice" id="UnitPrice" placeholder="Unit Price" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      modalOpened: false
    };
  }

  componentDidMount() {
    fetch(apiURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  pushElement = function (element) {
    this.setState({
      isLoaded: true,
      items: this.state.items.concat([element]),
    })
  }

  modalOpenOrClose(e) {
    this.setState({
      modalOpened: !this.state.modalOpened
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <button onClick={this.modalOpenOrClose.bind(this)}>Open Modal</button>
          {this.state.modalOpened && <Dialog component={<NewProductForm />} modalOpenOrClose={this.modalOpenOrClose.bind(this)} />}

          <NewProduct pushElement={this.pushElement.bind(this)} />
          <hr />
          <Tbl data={items} />
        </div>
      );
    }
  }
}

export default App;
