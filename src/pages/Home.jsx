import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { exampleAction } from '../redux/actions/example';

class Home extends Component {
    componentDidMount() {
        const { exampleAction } =  this.props;
        exampleAction();
    }

    render() {
        const { example } = this.props;
        return (
            <div>
                <h4>Home</h4>
                <Link to="/rick/character">Character Rick</Link> <br/>
                <Link to="/fail-url">Go to fail</Link>

                {
                    !example.isFetching ? 
                        Object.keys(example.data).map( (key , idx) => <p key={key}>{example.data[key].author}</p>)
                    :
                        <h5>Loading</h5>
                }
                { example.error ? <h5 style={{color: 'red'}}>Error: { example.errorMessage.toString() } </h5> : null }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      example: state.example,
    };
};
  
const mapDispatchToProps = dispatch => ({
    exampleAction() {
        dispatch(exampleAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

