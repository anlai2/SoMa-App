import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AuthSession, LinearGradient } from 'expo';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { safeTrekAuth, safeTrekAuthUpdate, safeTrekCheck } from '../actions';

class SafeTrekAuthScreen extends React.Component {
  constructor(props) {
    super(props);

    const result = null;
    const code = '';

    this.state = { result, code };
  }

  authIt() {
    const { safeTrek, stCode, accessToken, refreshToken } = this.props;

    this.props.safeTrekAuth({ safeTrek: true, stCode, accessToken, refreshToken });
  }

  getAccessToken() {
    var data = {
      grant_type: "authorization_code",
      code: this.state.code,
      client_id: "gk1nFtbQr4pBpJD0rzAp3vaSi555sm4s",
      client_secret: "eWTSj_izMvD3nBJFXxkRDZF4aXDGKofYRZyzw_31oer31kuoY6-OVDs27nEHJu0B",
      redirect_uri: "https://auth.expo.io/@anlai2/SoMaApp"
    }
    console.log(this.state.code);
    fetch('https://login-sandbox.safetrek.io/oauth/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((responseData) => {
        this.props.safeTrekAuthUpdate({ prop: 'accessToken', value: responseData.access_token });
        this.props.safeTrekAuthUpdate({ prop: 'refreshToken', value: responseData.refresh_token });
        this.authIt();
      });
  };

  componentDidMount() {
    //this.props.safeTrekCheck();
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        <View style={styles.container}>
          <Button onPress={this._handlePressAsync}>
            SafeTrek Authorization
        </Button>
{/*           {this.state.tokenResponse ? (
            <Text> {JSON.stringify(this.state.)}</Text>
          ) : null} */}
        </View>
      </View>
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
    this.setState({ code: this.state.result.url.substring(this.state.result.url.indexOf('=') + 1, this.state.result.url.indexOf('&')) });
    this.props.safeTrekAuthUpdate({ prop: 'stCode', value: this.state.code });

    this.getAccessToken();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundStyle: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  const { safeTrek, stCode, accessToken, refreshToken } = state.stAuth;

  return {
    safeTrek, stCode, accessToken, refreshToken
  };
};
export default connect(mapStateToProps, {
  safeTrekAuth, safeTrekAuthUpdate, safeTrekCheck
})(SafeTrekAuthScreen);