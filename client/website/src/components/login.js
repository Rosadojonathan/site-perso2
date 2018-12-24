import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { Grid,Cell,Textfield,Button} from 'react-mdl';
import axios from 'axios';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate, loggedin } from '../redux/actions/actions';
import {store} from '../redux/store/store';

class Login extends Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      password: '',
      username:'',
      name:'',
      redirectToReferrer: false,
      failed: false,
      msgSend: false,
      success: false,
    };

  }

  onSubmit = async () => {
    const {username, password} = this.state;
    const res = await axios.post('/api/login',{
      username,
      password
    })
    if (res.data.success === true){
      
      this.setState({msgSend:true,success:true})
      this.props.authenticate(res.data.token)
      this.props.loggedin()
      this.setState({redirectToReferrer:true})
    } else if (res.data.success === false ){
      this.setState({failed:true})
      setTimeout(()=> this.setState({failed:false}),1000) //try again?

    }
  }

  render() {
    const bgColor = this.state.bgColor ? this.state.bgColor : '';
    const message = this.state.msgSend ? "✔" : "S'identifier";
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer === true){
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
          <Button id='login-form' raised colored ripple style={{backgroundColor: this.state.failed ? 'rgb(153,0,0)' : this.props.expiredSession ? 'orange' : this.state.success ? 'green' : bgColor, borderRadius:"8px"}} onClick={() => this.onSubmit()} > {this.state.failed ? 'Wrong username or password' : this.props.expiredSession ? 'Expired session: please login again' : message}</Button>

          </Cell>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { expiredSession: state.expiredSession}
}

const mapDispatchToProps = dispatch => ({
  authenticate: (token) => dispatch(authenticate(token)),
  loggedin: () => dispatch(loggedin()) // <-- manually dispatches
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
