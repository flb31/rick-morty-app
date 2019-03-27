import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearchCharacters } from '../../redux/actions/character';

class SearchBox extends Component {
    
    state = {
        query: '',
        timeout: null,
    }
    
    constructor( props ) {
        super(props);
        this.DELAY = 700;
        this.MIN_LENGTH = 3;
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    search = () => {
        const { query, timeout } = this.state;

        if ( timeout ) {
            clearTimeout(timeout);
            this.setState({
                timeout: null,
            });
        }

        if(query.length >= this.MIN_LENGTH) {
            const timeout = setTimeout(() => {
                this.props.fetchSearchCharacters(query);
            }, this.DELAY);

            this.setState({
                timeout: timeout,
            });
        }
        
    }


    render() {
        return (
            <div className="Searchbox">
                
                <input
                    type="text"
                    className="Searchbox__input"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                    onKeyUp={this.search}
                    autoComplete="off"
                    placeholder={ this.props.placeholder } />
            </div>
        )
    }
};

SearchBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
} );

const mapDispatchToProps = dispatch => ({
    fetchSearchCharacters(query) {
        dispatch(fetchSearchCharacters(query));
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchBox );
