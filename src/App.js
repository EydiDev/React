import React, { Component } from 'react';
import axios from "axios";
import Get from './Get';
import Post from './post';
import AxiosGet from './axiosGet';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get("https://dummyjson.com/posts")
      .then(response => 
        this.setState({
            posts : response.data.posts
        }))}

  render() {
    return (
      <div>
        <Get  />
      <Post />
      <h1>axios get</h1>
      {this.state.posts.map((posts) => <AxiosGet key={posts.id} id={posts.id} title={posts.title} body = {posts.body}/>)}
      </div>
    );
  }
}

export default App;