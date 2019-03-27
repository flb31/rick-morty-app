import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter, updateNumCharacter } from '../redux/actions/character';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Pagination from '../components/Pagination/Pagination';

class Home extends Component {
    componentDidMount() {
        const { fetchCharacter, character } =  this.props;
        fetchCharacter(character.page);
    }

    renderCharacters = () => {
        const { character } = this.props;
        return character.data[character.page] ? character.data[character.page].map( character => <CharacterCard key={character.id} character={character} /> ) : null
    }

    render() {
        const { character } = this.props;
        return (
            <div>
                <h4>Home</h4>
                { !character.isFetching ? this.renderCharacters() : <h5>Loading</h5> }
                { character.error ? <h5 style={{color: 'red'}}>Error: { character.errorMessage } </h5> : null }

                <Pagination
                    fetchAction={fetchCharacter}
                    updateAction={updateNumCharacter}
                    page={character.page}
                    prev={character.prev}
                    dataPagination={character.data}
                    next={character.next} />
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
    fetchCharacter(page) {
        dispatch(fetchCharacter(page))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
