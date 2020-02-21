import React, { Component } from 'react';
import Header from './Header'
class BeerInfo extends Component {

    //  getBeerInfo = () => {
    //     return this.props.beersProp && this.props.beersProp.find(beer => {
    //         return beer._id===this.props.match.params.beerID
    //      })
    //      }
     
    getBeerInfo = () => {
        let displayTheBeer = this.props.beersProp.find(eachBeer => {
            return eachBeer._id === this.props.match.params.beerID
         })
         return displayTheBeer
         }
     

    render() {
        let displayTheBeer = this.getBeerInfo()
        console.log(this.props)
        return (
            <div>
                <Header />
                <img src={this.props.ready? (displayTheBeer.image_url) : ('loading...')} alt="beerlogo"/><br />
                {this.props.ready? (displayTheBeer.name) : ("loading...")}<br />
                {this.props.ready? (displayTheBeer.tagline) : ("loading...")}<br />
                {this.props.ready? (displayTheBeer.first_brewed) : ("loading...")}<br />
                {this.props.ready? (displayTheBeer.attenuation_level) : ("loading...")}<br />
                {this.props.ready? (displayTheBeer.description) : ("loading...")}<br />
                {this.props.ready? (displayTheBeer.contributed_by) : ("loading...")}<br />
            </div>
        );
    }
}

export default BeerInfo;