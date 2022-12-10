import React, { Component } from "react";
import axios from "axios";
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
    const {key , id , title , body } = this.props;
    return (
       <div>
   
          <div key={key}>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <br />

            <h5>{body}</h5>
            <br />
            <br />
          </div>
        
      </div>
    );
  }
}

export default axiosGet;
