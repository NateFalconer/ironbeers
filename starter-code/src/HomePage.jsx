import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <ul>
        <img className="homeimg" alt="allbeerz" src="images/beers.png" />
        <li><Link to="/beers">All Beers</Link></li>
        <img className="homeimg" alt="randobeer" src="images/random-beer.png" />
        <li><Link to="/random-beer">Random Beer</Link></li>
        <img className="homeimg" alt="newbeer" src="images/new-beer.png" />
        <li><Link to="/new-beer">New Beer</Link></li>
    </ul>
  );
};

export default HomePage;