import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import HomePage from './HomePage'
import {Switch, Route, Link} from 'react-router-dom'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Beers from './Beers'
import BeerInfo from './BeerInfo'

class App extends Component {

  state = {
    allBeers: [],
    ready: false
  }
  

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => {
      this.setState({
        allBeers: res.data,
        ready: true
      });
    });
  }

  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" render={props => 
            <HomePage{...props} />} />
          <Route exact path="/beers/" render={props => <Beers {...props} allBeers={this.state.allBeers} ready={this.state.ready} />}/>
          <Route exact path="/random-beer/" render={props => <RandomBeer {...props}/>} />
          <Route exact path="/new-beer/" render={props => <NewBeer {...props}/>} />
          <Route exact path="/beers/:beerID" render={(props) => <BeerInfo {...props} beersProp={this.state.allBeers} ready={this.state.ready} />} />
        </Switch>

      </div>
    );
  }
  }

export default App;
