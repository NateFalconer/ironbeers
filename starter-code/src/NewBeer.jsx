import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios'
class NewBeer extends Component {

    state = {

    }


    addNewBeer = (e) => {
        e.preventDefault()


        // let nateBeer ={
        //     name: 'Falcon Pale Ale',
        //     tagline: 'Get Ready to Take Off',
        //     description: 'American Pale Ale',
        //     first_brewed: '2020',
        //     brewers_tips: 'We did the work for you',
        //     attenuation_level: 69,
        //     contributed_by: 'Jimbo',
        // }
        Axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    // name - must be type text
    // tagline - must be type text
    // description - must be type text
    // first_brewed - must be type text
    // brewers_tips - must be type text
    // attenuation_level - must be type number !!!
    // contributed_by - must be type text

    
    }

    handleTextInput = (e) => {
        console.log("name is ",e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    render() {
        return (
            <div>
                <Header />
                <h1>New Beer here!!!!</h1>
                <form onSubmit={this.addNewBeer}>
                    <input type="text" name="name" placeholder="name" onChange={this.handleTextInput} />
                    <input type="text" name="tagline" placeholder="tagline" onChange={this.handleTextInput} />
                    <input type="text" name="description" placeholder="description" onChange={this.handleTextInput} />
                    <input type="text" name="first_brewed" placeholder="first brewed date" onChange={this.handleTextInput} />
                    <input type="text" name="brewers_tips" placeholder="brewer's tips" onChange={this.handleTextInput} />
                    <input type="number" name="attenuation_level" placeholder="attenuation level" onChange={this.handleTextInput} />
                    <input type="text" name="contributed_by" placeholder="contributed by" onChange={this.handleTextInput} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default NewBeer;