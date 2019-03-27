import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, updateNumCharacter } from '../redux/actions/character';
import { CharacterCard, SearchBox } from '../components';
import Pagination from '../components/Pagination/Pagination';

class Home extends Component {
    componentDidMount() {
        const { fetchCharacters, character } =  this.props;
        if(!character.data[character.page]) {
            fetchCharacters(character.page);
        }
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
                <SearchBox placeholder="Hey Morty, finds out characters with my new invention" />

                { !character.isFetching ? this.renderCharacters() : <h5>Loading</h5> }
                { character.error ? <h5 style={{color: 'red'}}>Error: { character.errorMessage } </h5> : null }

                <Pagination
                    fetchAction={fetchCharacters}
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
    fetchCharacters(page) {
        dispatch(fetchCharacters(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
