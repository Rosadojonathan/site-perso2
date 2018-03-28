import React, { Component } from 'react';
import {Textfield,Button} from 'react-mdl';
import axios from 'axios';


class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: ''
    }
    this.onSend = this.onSend.bind(this)

  }

  onSend = async () => {
    if (this.state.email && this.state.email.includes('@')){
      const currentArticle = encodeURIComponent(window.location.pathname.split('/')[2]);
      const email = this.state.email;
      localStorage.setItem('email',JSON.stringify(this.state.email));
      localStorage.setItem('signedUp',true);

      this.setState({email: '',message:'',name:'', bgColor:'green',msgSend:true})
      setTimeout(()=> this.setState({bgColor:'#990000',msgSend:false}),1200)


      var data = await axios.post('/newsletter', {
        email,
        currentArticle
      })

    }
  }

    componentWillMount(){
      localStorage.getItem('email') && this.setState({'email': JSON.parse(localStorage.getItem('email'))})
      localStorage.getItem('signedUp') && this.setState({'signedUp': true})

    }

  render() {
    let bgColor = this.state.bgColor ? this.state.bgColor : '#990000';
    let message = this.state.msgSend ? "✔" : "S'abonner";

    return (
      <div style={{textAlign:'center', display: this.state.signedUp ? 'none' : 'block'}}>
        <h3 style={{fontSize:'2em'}}>Préviens moi de tes prochains articles !</h3>
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
            <br/>
        <Button raised colored ripple style={{backgroundColor:bgColor}} onClick={() => this.onSend()} > {message}</Button>


      </div>
    );
  }

}

export default SignupForm;
