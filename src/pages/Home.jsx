import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../redux/actions/character';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import Pagination from '../components/Pagination/Pagination';

class Home extends Component {
    componentDidMount() {
        const { fetchCharacter, character } =  this.props;
        fetchCharacter(character.page);
    }

    componentWillReceiveProps(nextProps) {
        const { character } = nextProps;

        if(!character.isFetching) {
            this.setState({
                page: character.page
            });
        }
    }

    renderCharacters = () => {
        const { character } = this.props;
        return character.data.map( character => <CharacterCard key={character.id} character={character} /> )
    }

    render() {
        const { character } = this.props;
        return (
            <div>
                <h4>Home</h4>
                { !character.isFetching ? this.renderCharacters() : <h5>Loading</h5> }
                { character.error ? <h5 style={{color: 'red'}}>Error: { character.errorMessage } </h5> : null }

                <Pagination
                    action={fetchCharacter}
                    page={character.page}
                    prev={character.prev}
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
