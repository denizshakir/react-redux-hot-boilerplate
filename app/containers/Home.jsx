import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        counter: 0
    }

    incrementCounter = () => this.setState({ counter: this.state.counter + 1 });

    render() {
        return (
            <div>
                <h1 className="title">Home</h1>
                <span>Title: {this.props.title}</span><br /><br />
                <button onClick={this.incrementCounter}>Increment</button><br />
                <h3>Counter: {this.state.counter}</h3>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        title: state.appReducer.title
    };
}

export default connect(mapStateToProps)(Home);