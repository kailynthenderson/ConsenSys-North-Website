import React, { Component } from 'react';
import SignUpForm from './components/signUpForm.js'
import Particles from 'react-particles-js';
import ConsensysLogo from './images/consensysLogo.svg'
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
  },
  textStyle: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
  },
  imageStyle:{
   position: 'absolute',
   top: '50%',
   left: '50%',
   width: '600px',
   height: '600px',
   marginTop: '-300px',/* Half the height */
   marginLeft: '-300px',/* Half the width */
 },
 headerStyle: {
   fontFamily: 'medium-ui-sans-serif-text-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif!important',
   fontSize: '50px'
 },
}

// <p>Sign up for upcoming news and events right here in Toronto!</p>


class App extends Component {
  render() {
    return (
      <div style={styles.referenceStyle}>
        <div className="Image-Container">
          <img style={styles.imageStyle} src={ConsensysLogo} alt="ConsenSys Logo" height="300" width="300"/>
        </div>
        <Particles style={{position: 'absolute'}}/>
        <div style={styles.textStyle}>
          <h1 style={styles.headerStyle}>CONSENSYS NORTH</h1>
          <SignUpForm/>
        </div>
      </div>
    );
  }
}

export default App;
