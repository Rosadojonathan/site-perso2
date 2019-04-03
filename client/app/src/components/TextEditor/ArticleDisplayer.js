import React, { Component } from 'react'
import ArticleEditor from "./ArticleEditor";

export default class ArticleDisplayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
        };
      }

    componentDidMount() {
        fetch("/api/posts")
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
            .catch(function(error) {
            console.log(error);
            });
    }
  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          
          <ArticleEditor

            style={{ width: "80%" }}
            key={post.id}
            cardTitle={post.title}
            cardText={post.description}
            linkTitle={post.path}
            image={post.image}
            date={new Date(post.createdAt).toISOString().split("T")[0]}
          />
        ))}
      </div>
    )
  }
}
