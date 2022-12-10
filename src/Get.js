import React, { Component } from "react";

class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((json) =>
       this.setState({
        posts : json.posts
       }),
      
       )
        .catch((data)=> console.log(data))
      }

render() {
    return (
      <div>
        <h1>posts : </h1>
        {this.state.posts.map((posts) => (
          <div key={posts.id}>
            <h2>{posts.id}</h2>
            <h3>{posts.title}</h3>
            <br />

            <h5>{posts.body}</h5>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Get;
