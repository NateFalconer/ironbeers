import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import HomePage from './HomePage'
import {Switch, Route, Link} from 'react-router-dom'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Beers from './Beers'


class App extends Component {

  state = {
    allBeers: [],
    ready: false
  }

getRandomBeer = () => {
  let newRandomBeer = this.state.allBeers[Math.floor(Math.random()*this.state.allBeers.length)]
  return newRandomBeer
}


  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" render={props => 
            <HomePage{...props} />} />
          <Route exact path="/beers/" render={props => <Beers {...props}/>} allBeers={this.state.allBeers} ready={this.state.ready} />
          <Route exact path="/random-beer/" render={props => <RandomBeer {...props}/>} />
          <Route exact path="/new-beer/" render={props => <NewBeer {...props}/>} />
        </Switch>

      </div>
    );
  }
  }

export default App;
