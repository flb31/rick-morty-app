import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h4>Home</h4>
                <Link to="/rick/character">Character Rick</Link> <br/>
                <Link to="/fail-url">Go to fail</Link>
            </div>
        )
    }
}

export default Home;
