import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Pagination extends Component {

    prev = () => {
        const { action, page, fetchList } = this.props;
        fetchList(action, page-1);
    }

    next = () => {
        const { action, page, fetchList } = this.props;
        fetchList(action, page+1);
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
    fetchList(action, page) {
        dispatch(action(page))
    },
});

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired,
    next: PropTypes.bool.isRequired,
    prev: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(Pagination);
