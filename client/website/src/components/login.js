import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { Grid,Cell,Textfield,Button} from 'react-mdl';
import axios from 'axios';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../redux/actions/actions';
import {store} from '../redux/store/store';

class Login extends Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      password: '',
      username:'',
      name:'',
      redirectToReferrer: false
    };

    // const fakeAuth = {
    //   isAuthenticated: false,
    //   authenticate(cb) {
    //     this.isAuthenticated = true
    //     setTimeout(cb, 100) // fake async
    //   },
    //   signout(cb) {
    //     this.isAuthenticated = false
    //     setTimeout(cb, 100) // fake async
    //   }
    // }
  }

  onSubmit = async () => {
    const {username, password} = this.state;
    const res = await axios.post('/api/login',{
      username,
      password
    })
    if (res.data.success === true){
      this.props.authenticate()
      this.setState({redirectToReferrer:true})
      // this.props.authenticate()
      // .then(() => {
      //   this.setState({redirectToReferrer:true})
      // })

      // this.props.fakeAuth.authenticate(() => {
        
      // })
    }
  }

  render() {
    const bgColor = this.state.bgColor ? this.state.bgColor : '';
    const message = this.state.msgSend ? "✔" : "S'identifier";
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer === true){
      // <Redirect to='/admin' />
      this.props.history.push(from.pathname);
    }
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="landing-grid" style={{top:'170px'}}>
          <Cell col={12} style={{display: this.state.showChatbot ? 'none' : 'block'}}>

            <h3 style={{}}>Login</h3>
            <Textfield
                    name="name"
                    label="Username..."
                    value={this.state.username}

                    onChange={e => this.setState({username: e.target.value})}
                    pattern="\S+.*"
                    error="Entrez un nom quand même..."
                    floatingLabel
                    style={{width: '400px'}}
                />
                <br/>
            <Textfield
                    name="password"
                    type="password"
                    label="Password..."
                    value={this.state.password}

                    onChange={e => this.setState({password: e.target.value})}
                    floatingLabel
                    style={{width: '400px'}}
                />
                <br/>
          <Button id='login-form' raised colored ripple style={{backgroundColor:bgColor}} onClick={() => this.onSubmit()} > {message}</Button>

          </Cell>
        </Grid>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  authenticate: () => dispatch(authenticate()) // <-- manually dispatches
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
