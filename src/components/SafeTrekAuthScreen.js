import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AuthSession, LinearGradient } from 'expo';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { safeTrekAuth, safeTrekAuthUpdate, safeTrekCheck } from '../actions';

class SafeTrekAuthScreen extends React.Component {
  state = {
    result: null,
    code: ''
  };

  authIt() {
    const { safeTrek, stCode } = this.props;

    this.props.safeTrekAuth({ safeTrek: true, stCode });
  }

  componentDidMount() {
    this.props.safeTrekCheck();
  }

  render() {
    return (
    <LinearGradient colors={['#009688', '#B2DFDB']} style={styles.backgroundStyle}>
      <View style={styles.container}>
        <Button onPress={this._handlePressAsync}>
          SafeTrek Authorization
        </Button>
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
        </View>
      </LinearGradient>
    );
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://account-sandbox.safetrek.io/authorize?audience=https://api-sandbox.safetrek.io&client_id=gk1nFtbQr4pBpJD0rzAp3vaSi555sm4s&scope=openid%20phone%20offline_access&state=statecode&response_type=code`
        + `&redirect_uri=${encodeURIComponent(redirectUrl)}`
    });
    this.setState({ result });
    this.setState({ code: this.state.result.url.substring(this.state.result.url.indexOf('=') + 1, this.state.result.url.indexOf('&'))});
    this.props.safeTrekAuthUpdate({ prop: 'stCode', value: this.state.code });
    this.authIt()
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#7834a8'
  }
});

const mapStateToProps = (state) => {
  const { safeTrek, stCode } = state.stAuth;

  return {
    safeTrek, stCode
  };
};
export default connect(mapStateToProps, { 
  safeTrekAuth, safeTrekAuthUpdate, safeTrekCheck 
})(SafeTrekAuthScreen);