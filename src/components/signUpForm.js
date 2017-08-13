import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SignUpForm extends Component {
  render(){
    return(
      <div>
        <TextField
          floatingLabelText="Email"
          hintText="canada@consensys.net"
        />
        <br/>
        <RaisedButton label="Sign Up" primary={true} />
      </div>
    );
  }
}

export default SignUpForm;
