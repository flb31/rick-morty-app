import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'query-string';

class Pagination extends Component {

    exec = (newPage) => {
        const {
            updateAction,
            dataPagination,
            fetchAction, 
            action,
            query,
        } = this.props;

        if(!dataPagination[newPage]) {
            action(fetchAction, newPage, query);
        } else {
            action(updateAction, newPage, query);
        }

        this.addQueryParams(newPage);
    }

    addQueryParams = (page) => {
        const { location, history } = this.props;
        const queryParams = qs.parse(location.search);
        let queryString = '';
        for( const key in queryParams) {
            if(key !== 'page') {
                queryString += `${key}=${queryParams[key]}&`;
            }
        }
        if(queryString) {
            queryString = queryString.substring(0, queryString.length - 1);
        }
        
        history.push({
            pathname: location.pathname,
            search: `?${queryString}&page=${page}`,
        });
    }

    render() {
        const { next, prev } = this.props;
        return (
            <div>
                <button disabled={!prev} onClick={ () => this.exec (this.props.page - 1) }>Prev</button>
                <button disabled={!next} onClick={ () => this.exec (this.props.page + 1) }>Next</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    action(action, page, query) {
        dispatch(action(page, query))
    },
});

Pagination.defaultProps = {
    query: ''
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    fetchAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
    next: PropTypes.bool.isRequired,
    prev: PropTypes.bool.isRequired,
    dataPagination: PropTypes.object.isRequired,
    query: PropTypes.string
};

export default connect(null, mapDispatchToProps)(Pagination);
