import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid,Cell,Textfield,Button} from 'react-mdl';
import axios from 'axios';
import Recaptcha from 'react-google-invisible-recaptcha';
import { Widget, addResponseMessage } from 'react-chat-widget';
import jonathanLogo from '../img/jonathan-rosado-image-cv-small.jpg'
import 'react-chat-widget/lib/styles.css';
import '../App.css';


class Contact extends Component {
 state = {
   email: '',
   message:'',
   name:'',
   showChatbot:false,
   widgetClicked:false,
   firstClick: true,
 };

 componentDidMount(){
  addResponseMessage('Discutez avec mon chatbot !')
 }

handleNewUserMessage = (newMessage) => {
  // fetch(`/api/chatbot/${newMessage}`)
  fetch(`/conversations/default/respond`,
   {method: "POST",
   headers: {
    "Accept":"application/json",
    "Content-Type":"application/json"
   },
   body: JSON.stringify({
     "query":`${newMessage}`
   })
})
  .then( function(res) {
    console.log(res);
    return res.json()
  })
  .then( function(res) {
    console.log(res);
    addResponseMessage(res[0].text);
   }
  )
}

handleWidgetClicked = () => {
  this.setState({widgetClicked:true})
}

 onSubmit = () => {
   if (this.state.name && this.state.email && this.state.message){

     this.recaptcha.execute();

   }
   else {
     alert("Remplissez tous les champs s'il vous plaît");
     this.recaptcha.reset();
   }
 }

  handleSubmit = async () => {
   const { name, email, message } = this.state;
   localStorage.setItem('name',JSON.stringify(this.state.name))
   localStorage.setItem('email',JSON.stringify(this.state.email))

   this.setState({email: '',message:'',name:'', bgColor:'green',msgSend:true})
   setTimeout(()=> this.setState({bgColor:'',msgSend:false}),1200)

   const form = await axios.post('/api/contactform', {
     name,
     email,
     message,
   })
 }

 showChatbot = () => {
   this.setState({showChatbot:true})
 }

componentWillMount(){
  localStorage.getItem('name') && this.setState({
    name: JSON.parse(localStorage.getItem('name'))
  })

  localStorage.getItem('email') && this.setState({
    email: JSON.parse(localStorage.getItem('email'))
  })
}

  render() {
    const bgColor = this.state.bgColor ? this.state.bgColor : '';
    const message = this.state.msgSend ? "✔" : "Envoyer";
    return (
  <div style={{width:'100%',margin:'auto'}}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Me contacter - Tech-Marketer </title>

      <meta name="description" content="Pour une demande de renseignements ou toute autre proposition n'hésitez pas à me contacter ici."/>

      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Me contacter - Tech-Marketer " />
      <meta property="og:description" content="Pour une demande de renseignements ou toute autre proposition n'hésitez pas à me contacter ici."/>
      <meta property="og:url" content={window.location.href}/>
      <meta property="og:image" content="https://jonathanrosado.fr/images/homepage.jpg" />
    </Helmet>

    <Grid className="landing-grid" style={{top:'170px'}}>
      <Cell col={12} style={{display: this.state.showChatbot ? 'none' : 'block'}}>

        <h3 style={{}}>Me contacter de manière classique...</h3>
        <Textfield
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
                name="email"
                label="Email..."
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
                pattern="\S+@\S+\.\S+"
                error="L'adresse email n'est pas valide"
                floatingLabel
                style={{width: '400px'}}
            />
            <br/>
        <Textfield
                name="message"
                label="Message..."
                value={this.state.message}
                onChange={e => this.setState({message:e.target.value})}
                floatingLabel
                rows={3}
                style={{width: '400px'}}
            />
            <br/>
        <Button id='contact-form' raised colored ripple style={{backgroundColor:bgColor, borderRadius:"8px"}} onClick={() => this.onSubmit()} > {message}</Button>
        <Recaptcha
          ref={ ref => this.recaptcha = ref }
          sitekey="6LfDTE8UAAAAAA-2-bFtrk5cFi3pQMh2SiWh2cDj"
          onResolved={ this.handleSubmit } />
          <br/>
          <br/>
    </Cell>

    <Cell col={12} style={{display: this.state.showChatbot ? 'none' : 'block',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
          <div style={{alignItems:'center'}}>
          <h3> ... ou passer par le chatbot ?</h3>
          <br/>
          <div onClick={this.handleWidgetClicked}>
          <Widget 
              handleNewUserMessage={this.handleNewUserMessage}
              profileAvatar={jonathanLogo}
              title="Chatbot de Jonathan"
              subtitle=""
              senderPlaceHolder="Écrivez un message"
              badge={this.state.widgetClicked ? "0" : "1" }
              showCloseButton="false"
            />
            </div>
          </div>
      </Cell>
      <Cell col={12} style={{ display:this.state.showChatbot ? 'block':'none' }}>
        <div onClick={this.handleWidgetClicked}>
          <Widget 
              handleNewUserMessage={this.handleNewUserMessage}
              profileAvatar={jonathanLogo}
              title="Chatbot de Jonathan"
              subtitle=""
              senderPlaceHolder="Écrivez un message"
              badge={this.state.widgetClicked ? "0" : "1" }
              showCloseButton="false"
            />
          </div>
      </Cell>
    </Grid>
  </div>
    );
  }
}

export default Contact;
