import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class Home extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyDOE4qHaObgbGg5fDGAiKb7Opv7ClTD4nw",
			authDomain: "soma-b8c6f.firebaseapp.com",
			databaseURL: "https://soma-b8c6f.firebaseio.com",
			projectId: "soma-b8c6f",
			storageBucket: "soma-b8c6f.appspot.com",
			messagingSenderId: "381413117221"
		};
		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
					<Router />
			</Provider>
			);
		}
	}

	export default Home;