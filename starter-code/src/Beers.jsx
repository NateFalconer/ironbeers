import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import './Beers.css'
import {Link} from 'react-router-dom'

class AllBeers extends Component {
  


  showTheBeers = () => {
    return this.props.allBeers.map(eachBeer => {
      return (
        <Link to={"/beers/" + eachBeer._id}>
        <div className="beersrow">
          <img alt={eachBeer.name} src={eachBeer.image_url} />
          <div className="col">
            <div className="row">{eachBeer.name}</div>
            <div className="row">{eachBeer.tagline}</div>
            <div className="row">Created by: {eachBeer.contributed_by}</div>
          </div>
        </div>
        </Link>
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