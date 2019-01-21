import React, { Component } from 'react';
import trim from 'trim';
import {Textfield,CardTitle,Button } from 'react-mdl';
import Recaptcha from 'react-google-invisible-recaptcha';

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.onKeyup = this.onKeyup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      comment: '',
      name:''

    };


  }

  onSubmit = () => {
    if (this.state.name && this.state.comment){
      this.recaptcha.execute();
    }
    else {
      alert("Remplissez tous les champs s'il vous plaît")
    }
  }


  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== '' && this.state.name){
      e.preventDefault();
      this.recaptcha.execute();

    }
  }




  handleSubmit(){

    let date = new Date().toLocaleString()
    let dbCon = this.props.db.database().ref(`articles/${decodeURIComponent(window.location.pathname.split('/')[2])}`);
    localStorage.setItem('name',JSON.stringify(this.state.name))
    dbCon.push({
      comment: trim(this.state.comment),
      name:trim(this.state.name),
      date: date
    });
    this.setState({message:'',name:'', bgColor:'green',msgSend:true})
    this.setState({
      comment: '',
      name:'',

    });

    setTimeout(()=> this.setState({bgColor:'',msgSend:false}),1200)

  }

  componentWillMount(){
    localStorage.getItem('name') && this.setState({name: JSON.parse(localStorage.getItem('name'))})
  }

  render() {
    let bgColor = this.state.bgColor ? this.state.bgColor : '';
    let message = this.state.msgSend ? "✔" : "Commenter";

    return (

        <div>
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
                  <br/>
        <Button id='contact-form' raised colored ripple style={{backgroundColor:bgColor}} onClick={() => this.onSubmit()} > {message}</Button>
        <Recaptcha
          ref={ ref => this.recaptcha = ref }
          sitekey="6LfDTE8UAAAAAA-2-bFtrk5cFi3pQMh2SiWh2cDj"
          onResolved={ this.handleSubmit } />

       </div>
      // </form>
    );
  }

}

export default CommentBox;
