import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Pagination extends Component {

    prev = () => {
        const { updateAction, dataPagination, fetchAction, page, action, query } = this.props;
        const newPage = page-1;
        if(!dataPagination[newPage]) {
            action(fetchAction, newPage, query);
        } else {
            action(updateAction, newPage, query);
        }
    }

    next = () => {
        const { updateAction, dataPagination, fetchAction, page, action } = this.props;
        const newPage = page+1;
        if(!dataPagination[newPage]) {
            action(fetchAction, newPage);
        } else {
            action(updateAction, newPage);
        }
    }

    render() {
        const { next, prev } = this.props;
        return (
            <div>
                <button disabled={!prev} onClick={this.prev}>Prev</button>
                <button disabled={!next} onClick={this.next}>Next</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    action(action, page, query) {
        dispatch(action(page, query))
    },
});

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    fetchAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
    next: PropTypes.bool.isRequired,
    prev: PropTypes.bool.isRequired,
    dataPagination: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Pagination);
