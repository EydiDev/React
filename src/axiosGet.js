import React, { Component } from "react";
import axios from "axios";

const postsDiv = {
  width : "300px"
}
class axiosGet extends Component {
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
    const { id , title , body } = this.props;
    return (
     
   
          <div style={postsDiv}>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <br />

            <h5>{body}</h5>
            <br />
            <br />
          </div>
        
     
    );
  }
}

export default axiosGet;
