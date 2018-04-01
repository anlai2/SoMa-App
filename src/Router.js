import React from 'react';
import { Linking } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import MapScreen from './components/MapScreen';
import ImageUploadScreen from './components/ImageUploadScreen';
import SafeTrekAuthScreen from './components/SafeTrekAuthScreen';

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
	      			navigationBarStyle={{ backgroundColor: '#009688'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#000' }}/>
	      	</Scene>

	      	<Scene key="stAuth">
		      	<Scene
		      			onRight={() => Actions.postList()}
		      			rightButtonTextStyle={{ color: '#000'}}
		      			rightTitle="Posts"
		      			key="safeTrekAuth"
				      	component={SafeTrekAuthScreen}
				      	title="SafeTrek Authentication"
				      	navigationBarStyle={{ backgroundColor: '#009688'}} 
				      	/>
		      	</Scene>
		      	
	      	<Scene key="main">
	      		<Scene
	      			onRight={() => Actions.postCreate()}
	      			rightButtonTextStyle={{ color: '#000'}}
	      			rightTitle="Post"
	      			key="postList"
			      	component={PostList}
			      	title="Posts"
			      	navigationBarStyle={{ backgroundColor: '#009688'}} 
			      	/>
			    <Scene
	      			key="postCreate"
			      	component={PostCreate}
			      	title="Create a Post"
			      	backTitle="Posts"
			      	navigationBarStyle={{ backgroundColor: '#009688'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#000' }}
			      	/>
			    <Scene
	      			key="mapScreen"
			      	component={MapScreen}
			      	title="Drag to a Meeting Point"
			      	backTitle="Create Post"
			      	navigationBarStyle={{ backgroundColor: '#009688'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#000' }}
			      	/>
			    <Scene
			    	key="uploadImage"
			    	component={ImageUploadScreen}
			    	backTitle="Create Post"
			    	navigationBarStyle={{ backgroundColor: '#009688'}} 
	      			backButtonImage={require('../assets/back.png')}
	    			backButtonTextStyle={{ color: '#000' }}
					/>
	      	</Scene>
      	</Stack>
    </Router>
  );
};

export default RouterComponent;