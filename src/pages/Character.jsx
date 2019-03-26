import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Character extends Component {
    render() {
        const { history } = this.props;

        return (
            <div>
                <h4>Character</h4>
                <Link onClick={() => history.goBack() }>Regresar</Link>
            </div>
        )
    }
}

export default Character;
