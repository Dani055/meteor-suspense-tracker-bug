import React from 'react';
import { Link } from "react-router-dom";
export const Navbar = () => (
    <div>
        <h1>Welcome to Meteor!</h1>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/reactivity">Reactivity</Link>
        <Link to="/asd">Not found</Link>
    </div>
);
