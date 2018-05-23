import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

const soma_logo = require('../../assets/soma1.png');

class IntroScreen extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <View style={styles.logoContainer}>
          <Image style={styles.imageLogo} source={soma_logo} />
          <Text style={styles.textLogo}>SoMa </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Actions.createUser}>
            <Text style={styles.button}> Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.loginUser}>
            <Text style={styles.button}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoContainer: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: 150,
    width: 150,
  },
  textLogo: {
    marginTop: 30,
    color: '#000',
    fontWeight: '700',
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#1829B4',
  },
  button: {
    fontSize: 20,
    color: 'white',
  },
};

const mapStateToProps = ({ auth }) => {
  const {
    email, password, error, loading,
  } = auth;

  return {
    email,
    password,
    error,
    loading,
  };
};
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(IntroScreen);
