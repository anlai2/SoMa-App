import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class Home extends Component {
	componentWillMount() {
		const config = {
		    apiKey: "AIzaSyD45OuGkOtSohn6TEOKTIfpIH_OLvEU8M8",
		    authDomain: "manager-cfca6.firebaseapp.com",
		    databaseURL: "https://manager-cfca6.firebaseio.com",
		    projectId: "manager-cfca6",
		    storageBucket: "",
		    messagingSenderId: "150836461912"
  };
  	firebase.initializeApp(config);
}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default Home;