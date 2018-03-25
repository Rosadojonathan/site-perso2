import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid,Cell,Textfield,Button} from 'react-mdl';
import axios from 'axios';

import Chatbot from './chatbot';

class Contact extends Component {
 state = {
   email: '',
   message:'',
   name:'',
   'showChatbot':false,
 };

 onSubmit = () => {
   if (this.state.name && this.state.email && this.state.message){
     console.log(this.state);

     this.setState({email: '',message:'',name:'', bgColor:'green',msgSend:true})
     this.handleSubmit();
     setTimeout(()=> this.setState({bgColor:'',msgSend:false}),1200)
   }
   else {
     alert("Remplissez tous les champs s'il vous plaît")
   }
 }

  handleSubmit = async () => {


   const { name, email, message } = this.state;

   const form = await axios.post('/contactform', {
     name,
     email,
     message,
   })


 }

 showChatbot = () => {
   this.setState({showChatbot:true})
 }

  render() {

    let bgColor = this.state.bgColor ? this.state.bgColor : '';
    let message = this.state.msgSend ? "✔" : "Envoyer";
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
                onChange={() => {}}
                name="message"
                label="Message..."
                value={this.state.message}

                onChange={e => this.setState({message:e.target.value})}
                floatingLabel
                rows={3}
                style={{width: '400px'}}
            />

            <br/>
        <Button id='contact-form' raised colored ripple style={{backgroundColor:bgColor}} onClick={() => this.onSubmit()} > {message}</Button>

          <br/>
          <br/>
    </Cell>

    <Cell col={12} style={{display: this.state.showChatbot ? 'none' : 'block',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
          <div style={{alignItems:'center'}}>
          <h3> ... ou bien passer par le chatbot ?</h3>
          <br/>
          <Button id='contact-form' raised colored ripple style={{backgroundColor:'red'}} onClick={() => this.showChatbot()} > Voyons ça !</Button>


          </div>

      </Cell>
      <Cell col={12} style={{display: this.state.showChatbot ? 'block' : 'none'}}>




        <Chatbot style={{width:'100%',height:'600px' }} />



      </Cell>
    </Grid>
  </div>
    );
  }

}

export default Contact;
