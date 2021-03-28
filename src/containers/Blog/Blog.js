import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* <a href="/">Home</a> */}
                <NavLink exact to="/posts/">
                  Posts
                </NavLink>
              </li>
              <li>
                {/* <a href="/new-post">New Post</a> */}
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact component={Posts} />
        <Route path="/" render={() => <h1>HOME2</h1>} /> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* <Route component={() => <h1>Not Found</h1>} /> */}
          {/* <Route path="/" component={Posts} /> */}
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
