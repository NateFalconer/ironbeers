import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import './Beers.css'

class AllBeers extends Component {
  
    state = {
    beers: []
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => {
      this.setState({
        beers: res.data
      });
    });
  }

  showTheBeers = () => {
    return this.state.beers.map(eachBeer => {
      return (
        <div className="beersrow">
          <img alt={eachBeer.name} src={eachBeer.image_url} />
          <div className="col">
            <div className="row">{eachBeer.name}</div>
            <div className="row">{eachBeer.tagline}</div>
            <div className="row">Created by: {eachBeer.contributed_by}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.showTheBeers()}
      </div>
    ); 
        
  }
}

export default AllBeers;