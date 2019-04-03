import React, { Component } from 'react';
import likeHeart from '../img/likeheart.png';
import _ from 'lodash';
import '../App.css';

class LikeCounter extends Component {
  constructor(props){
    super(props)
    this.addLike = this.addLike.bind(this)
    this.state = {
      likes:0,
      clicked:false
    }
    let app = this.props.db.database().ref(`likes/${decodeURIComponent(window.location.pathname.split('/')[2])}`);
    app.on('value',snapshot => {
      if(snapshot.val()){
      this.setState({
        likes: snapshot.val().likes
      })
    }
    });

  }




  addLike(){

    if (!this.state.clicked){
    let likes = this.state.likes + 1


    let dbCon = this.props.db.database().ref(`likes/${decodeURIComponent(window.location.pathname.split('/')[2])}`);
    dbCon.set({
      likes:likes,

    });
    this.setState({
      clicked:true
    })
  }
    }





  render() {
    return (
      <div>
        <div className="like-number">
          <p><span id="likes">{this.state.likes}</span>Likes</p>
        </div>

          <img  className="like-heart-btn" onClick={this.addLike}  src={likeHeart} alt="like button"/>


      </div>
    );
  }

}

export default LikeCounter;
