import React from 'react';
import { Linking } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';

const RouterComponent = () => {
  return (
    <Router>
    	<Stack key="root" hideNavBar>
    		<Scene key="auth">
	    		<Scene key="intro" component={IntroScreen} title="SoMa" initial/>
	    		<Scene key="createUser" component={CreateForm} title="SoMa" />
	      		<Scene key="loginUser" component={LoginForm} title="SoMa" />
	      	</Scene>

	      	<Scene key="main">
	      		<Scene
	      			onRight={() => Actions.postCreate()}
	      			rightTitle="Post"
	      			key="postList"
			      	component={PostList}
			      	title="Posts"/>
			    <Scene
	      			key="postCreate"
			      	component={PostCreate}
			      	title="Create a Post"/>
	      	</Scene>
      	</Stack>
    </Router>
  );
};

export default RouterComponent;