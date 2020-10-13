import React from "react";
import {Link} from 'react-router-dom';
// import About from '../pages/About';


const Header = () => {
    return (
        <React.Fragment>
        <h1> My Bookcase</h1>
        <Link to="/">Home</Link>
        <Link to="/bookcase" className="bookLink">Bookcase</Link>
        <Link to="../pages/About">About</Link>
        </React.Fragment>
    )
}

export default Header;
