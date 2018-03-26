import React, { Component } from 'react';
import trim from 'trim';
import {Textfield,CardTitle,Button } from 'react-mdl';

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      comment: '',
      name:''

    };

  }

  onSubmit = () => {
    if (this.state.name && this.state.comment){

      this.setState({message:'',name:'', bgColor:'green',msgSend:true})
      let date = new Date().toLocaleString()

      let dbCon = this.props.db.database().ref(`articles/${decodeURIComponent(window.location.pathname.split('/')[2])}`);
      dbCon.push({
        comment: trim(this.state.comment),
        name:trim(this.state.name),
        date: date
      });
      this.setState({
        comment: '',
        name:'',

      });

      setTimeout(()=> this.setState({bgColor:'',msgSend:false}),1200)
    }
    else {
      alert("Remplissez tous les champs s'il vous plaît")
    }
  }


  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== '' && this.state.name){
      e.preventDefault();
      let date = new Date().toLocaleString()
      let dbCon = this.props.db.database().ref(`articles/${decodeURIComponent(window.location.pathname.split('/')[2])}`);
      dbCon.push({
        comment: trim(e.target.value),
        name:trim(this.state.name),
        date: date
      });
      this.setState({
        comment: '',
        name:'',
        bgColor:'green',
        msgSend:true
      });
      setTimeout(()=> this.setState({bgColor:'',msgSend:false}),1200)
    }
  }

  render() {
    let bgColor = this.state.bgColor ? this.state.bgColor : '';
    let message = this.state.msgSend ? "✔" : "Envoyer";
    return (
      // <form>
      //   <textarea
      //     className="textarea"
      //      placeholder="Écrivez un commentaire"
      //      cols="100"
      //      rows="5"
      //      onChange={this.onChange}
      //       onKeyUp={this.onKeyup}
      //       value={this.state.comment}>
      //     >
      //
      //   </textarea>
        <div style={{textAlign:'center'}}>
          <Textfield
                  onChange={() => {}}
                  name="name"
                  label="Nom..."
                  value={this.state.name}

                  onChange={e => this.setState({name: e.target.value})}
                  pattern="\S+.*"
                  error="Entrez un nom quand même..."
                  floatingLabel
                  style={{width: '400px'}}
              />
              <br/>
              <Textfield
                      onChange={() => {}}
                      name="message"
                      label="Commentaire..."
                      value={this.state.comment}

                      onChange={e => this.setState({comment:e.target.value})}
                      onKeyUp={this.onKeyup}
                      floatingLabel
                      rows={3}
                      style={{width: '400px'}}
                  />
        <Button id='contact-form' raised colored ripple style={{backgroundColor:bgColor}} onClick={() => this.onSubmit()} > {message}</Button>

       </div>
      // </form>
    );
  }

}

export default CommentBox;
