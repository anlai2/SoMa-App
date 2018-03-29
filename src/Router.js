import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
const RouterComponent = () => {
  return (
    <Router>
    	<Scene key="root" hideNavBar>
    		<Scene key="auth">
	    		<Scene key="intro" component={IntroScreen} title="SoMa" initial/>
	    		<Scene key="createuser" component={CreateForm} title="SoMa" />
	      		<Scene key="loginuser" component={LoginForm} title="SoMa" />
	      	</Scene>
	      	<Scene key="main">
	      		<Scene key="posts" component={PostList} title="SoMa"/>
	      	</Scene>
      	</Scene>
    </Router>
  );
};

export default RouterComponent;