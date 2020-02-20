import React, { Component } from 'react';
import Header from './Header';

class RandomBeer extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <div><img src={this.props.newRandomBeerProp.image_url} alt="Beer Image"/></div>
                <div>{this.props.newRandomBeerProp.name} {this.props.newRandomBeerProp.attenuation_level}</div>
                <div>{this.props.newRandomBeerProp.tagline} {this.props.newRandomBeerProp.first_brewed}</div>
                <div>{this.props.newRandomBeerProp.description}<br/>{this.props.newRandomBeerProp.contributed_by}</div>
                 */}
            </div>
        );
    }
}

export default RandomBeer;