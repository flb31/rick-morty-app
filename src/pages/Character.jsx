import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacter } from '../redux/actions/character';

class Character extends Component {

    componentDidMount() {
        const { match: { params }, character } = this.props;

        if(!character.characters[params.id]) {
            this.props.fetchCharacter(params.id);
        }
        
    }

    renderCharacter = () => {
        const { character } = this.props;
        const { match: { params } } = this.props;

        const char = character.characters[params.id];
        if( char ) {
            return (
                <div>
                    <p>{char.name}</p>
                    <img alt={char.name} src={char.image} />
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        const { character, history } = this.props;

        return (
            <div>
                <h4>Character</h4>
                { !character.isFetching ? this.renderCharacter() : <h5>Loading</h5> }
                <Link to="" onClick={() => history.goBack() }>Regresar</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      character: state.character,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCharacter(id) {
        dispatch(fetchCharacter(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);
