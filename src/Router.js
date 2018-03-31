import React from 'react';
import { Linking } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import MapScreen from './components/MapScreen';

const RouterComponent = () => {
  return (
    <Router>
    	<Stack key="root" hideNavBar>
    		<Scene key="auth">
	    		<Scene 
	    			key="intro" 
	    			component={IntroScreen} 
	    			title="SoMa" 
	    			navigationBarStyle={{ backgroundColor: '#009688'}} 
	    			initial/>
	    		<Scene 
	    			key="createUser" 
	    			component={CreateForm} 
	    			title="SoMa"
	    			backTitle="Home"
	    			navigationBarStyle={{ backgroundColor: '#009688'}}
	    			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#000' }}/>
	      		<Scene 
	      			key="loginUser" 
	      			component={LoginForm} 
	      			title="SoMa"
	      			backTitle="Home" 
	      			navigationBarStyle={{ backgroundColor: '#009688'}} />
	      	</Scene>

	      	<Scene key="main">
	      		<Scene
	      			onRight={() => Actions.postCreate()}
	      			rightTitle="Post"
	      			key="postList"
			      	component={PostList}
			      	title="Posts"
			      	/>
			    <Scene
	      			key="postCreate"
			      	component={PostCreate}
			      	title="Create a Post"
			      	/>
			    <Scene
	      			key="mapScreen"
			      	component={MapScreen}
			      	title="Drag to a Meeting Point"
			      	/>
	      	</Scene>
      	</Stack>
    </Router>
  );
};

export default RouterComponent;