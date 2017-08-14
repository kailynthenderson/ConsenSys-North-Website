import React, { Component } from 'react';
import SignUpForm from './components/signUpForm.js'
import Particles from 'react-particles-js';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ConsensysLogo from './images/consensysLogo.svg'
import TorontoSilhouette from './images/torontoSilhouette.png'

import './App.css';

//<img style={{position: 'absolute'}} src={ConsensysLogo} alt="ConsenSys Logo" height="100" width="100"/>

const styles = {
  referenceStyle: {
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    position: "absolute",
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    opacity: 0.6,
  },
  textStyle: {
    position: 'relative',
    top: '40%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
  },
  logoStyle:{
   position: 'absolute',
   opacity: 0.2,
   top: 0,
   bottom: 0,
   width: '70%',
   heigh: '70%',
   marginLeft: '-35%',
   marginTop: '-35%',
  //  width: '950px',
  //  height: '950px',
  //  marginLeft: '-475px',
  //  marginTop: '-475px',
 },
 torontoStyle:{
   position: 'absolute',
   opacity: 0.6,
   bottom: 0,
   right: 0,
   width: '35%',
   heigh: '35%',
 },
 headerStyle: {
   fontWeight: '400',
   fontSize: '10vh'
 },
 contactTextStyle: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   marginLeft: '1%',
   fontSize: '2vh',
 },
 consensysTextStyle: {
   position: 'absolute',
   bottom: 0,
   right: 0,
   marginRight: '1%',
   fontSize: '1.8vh',
 },
 inputStyle: {
   color: "black",
   fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
 },
}

// <p>Sign up for upcoming news and events right here in Toronto!</p>


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
   this.setState({value: event.target.value});
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div style={styles.referenceStyle}>
        <img className="Image" style={styles.logoStyle} src={ConsensysLogo} alt="ConsenSys Logo"/>
        <img style={styles.torontoStyle} src={TorontoSilhouette} alt="ConsenSys Logo"/>
        <Particles style={{position: 'absolute'}}/>
        <div style={styles.textStyle}>
          <h1 style={styles.headerStyle}>CONSENSYS TORONTO</h1>
          <p>Receive news and upcoming blockchain events right here in Toronto</p>
          <TextField
            className="emailInput"
            floatingLabelText="Email"
            hintText="canada@consensys.net"
            floatingLabelStyle={styles.inputStyle}
            underlineFocusStyle={styles.inputStyle}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br/>
          <RaisedButton label="Sign Up" primary={true}
            className="signUpButton"
            onTouchTap={this.handleTouchTap}
          />
        </div>
        <Snackbar
          style={{bottom: 0, textAlign: 'center',}}
          open={this.state.open}
          message="Nice! We'll keep you updated."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        {/*
          <p style={styles.contactTextStyle}>
            <a href="mailto:chami.akmeemana@consensys.net">
            Chami Akmeemana
            </a>
            |
            <a href="mailto:russell.verbeeten@consensys.net">
            Russell Verbeeten
            </a>
          </p>
        */}
        <p style={styles.contactTextStyle}>Chami | Russell</p>
        <p style={styles.consensysTextStyle}>A ConsenSys Formation © 2017</p>
      </div>
    );
  }
}

export default App;
