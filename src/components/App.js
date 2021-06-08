import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/posts';

class App extends Component {
  //to fetch posts form the api
  //we use componentdidMount
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('this.props  ', this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
