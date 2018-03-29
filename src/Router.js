import React from 'react';
import { Linking } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
const RouterComponent = () => {
	const url = "https://account-sandbox.safetrek.io/authorize?audience=https://api-sandbox.safetrek.io&client_id=gk1nFtbQr4pBpJD0rzAp3vaSi555sm4s&scope=openid%20phone%20offline_access&state=statecode&response_type=code&redirect_uri=http://localhost:3000/callback";
  return (
    <Router>
    	<Scene key="root" hideNavBar>
    		<Scene key="auth">
	    		<Scene key="intro" component={IntroScreen} title="SoMa" initial/>
	    		<Scene key="createuser" component={CreateForm} title="SoMa" />
	      		<Scene key="loginuser" component={LoginForm} title="SoMa" />
	      	</Scene>
	      	<Scene key="main">
	      		<Scene
	      			rightTitle="Safetrek"
	      			onRight={() => Linking.openURL(url)}
	      			key="postlist"
			      	component={PostList}
			      	title="SoMa"/>
	      	</Scene>
      	</Scene>
    </Router>
  );
};

export default RouterComponent;