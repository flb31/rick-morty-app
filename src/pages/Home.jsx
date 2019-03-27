import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, updateNumCharacter } from '../redux/actions/character';
import { CharacterCard, SearchBox } from '../components';
import Pagination from '../components/Pagination/Pagination';
import qs from 'query-string';

class Home extends Component {
    componentWillReceiveProps(nextProps) {
        const { fetchCharacters, location } =  this.props;
        const { character } = nextProps;
        const queryParams = qs.parse(location.search);

        if(!character.isFetching && !character.data[character.page]) {
            fetchCharacters(character.page, queryParams.query);
        }
    }

    componentWillMount() {
        const queryParams = qs.parse(this.props.location.search);
        if(queryParams.page) {
            this.props.updateNumCharacter(parseInt(queryParams.page));
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
                <SearchBox
                    placeholder="Hey Morty, finds out characters with my new invention"
                    history={this.props.history}
                    location={this.props.location} />

                { !character.isFetching ? this.renderCharacters() : <h5>Loading</h5> }
                { character.error ? <h5 style={{color: 'red'}}>Error: { character.errorMessage } </h5> : null }

                <Pagination
                    fetchAction={fetchCharacters}
                    updateAction={updateNumCharacter}
                    page={character.page}
                    prev={character.prev}
                    query={character.query}
                    dataPagination={character.data}
                    next={character.next}
                    history={this.props.history}
                    location={this.props.location}
                    />
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
    fetchCharacters(page, query) {
        dispatch(fetchCharacters(page, query))
    },
    updateNumCharacter(page) {
        dispatch(updateNumCharacter(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
