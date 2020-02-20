import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios'

class RandomBeer extends Component {
   
  state = {
    randomBeer: []
  }
  

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => {
          this.setState({
            randomBeer: res.data
          });
        });
      }  
    
    showRandomBeer = () => {
      return (
        <div className="randoBeer">
        <img src={this.state.randomBeer.image_url} alt="beerlogo"/><br />
        {this.state.randomBeer.name}<br />
        {this.state.randomBeer.tagline}<br />
        {this.state.randomBeer.contributed_by}
        </div>
      )
    }  

    render() {
        return (
            <div>
                <Header />
                {this.showRandomBeer()}
            </div>
        );
    }
}

export default RandomBeer;