import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    submitted: false,
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", data).then((result) => {
      console.log(result);
      /* This is another way to move from one page to another
        We can use either history method or use simply redirect
        with maintaining some state to render page conditionally */
      this.props.history.push("/posts");
      // this.setState({ submitted: true });
    });
  };

  render() {
    return (
      <div className="NewPost">
        {this.state.submitted ? (
          <Redirect to="/posts" />
        ) : (
          <div>
            <h1>Add a Post</h1>
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
            <label>Content</label>
            <textarea
              rows="4"
              value={this.state.content}
              onChange={(event) =>
                this.setState({ content: event.target.value })
              }
            />
            <label>Author</label>
            <select
              value={this.state.author}
              onChange={(event) =>
                this.setState({ author: event.target.value })
              }
            >
              <option value="Max">Max</option>
              <option value="Manu">Manu</option>
            </select>
            <button onClick={this.postDataHandler}>Add Post</button>
          </div>
        )}
      </div>
    );
  }
}

export default NewPost;
