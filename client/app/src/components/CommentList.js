import React, { Component } from "react";
import Comment from "./Comment";
import _ from "lodash";
import { Card, CardTitle } from "react-mdl";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    let app = this.props.db
      .database()
      .ref(
        `articles/${decodeURIComponent(window.location.pathname.split("/")[2])}`
      );
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      comments: messages
    });
  }

  render() {
    let commentsNodes = this.state.comments.map(comment => {
      return (
        <div key={comment.key}>
          <div>
            <Comment
              style={{ height: "auto"}}
              comment={comment.comment}
              name={comment.name}
              date={comment.date}
              
            />
          </div>
        </div>
      );
    });
    return (
      <div style={{ textAlign: "center", margin: "auto" }}>{commentsNodes}</div>
    );
  }
}

export default CommentList;
