import React from 'react';
import { Linking, Image } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import IntroScreen from './components/IntroScreen';
import CreateForm from './components/CreateForm';
import BuyersList from './components/BuyersList';
import SellersList from './components/SellersList';
import PostCreate from './components/PostCreate';
import MapScreen from './components/MapScreen';
import SafeTrekAuthScreen from './components/SafeTrekAuthScreen';
import TransactioningScreen from './components/TransactioningScreen';
import InterestsScreen from './components/InterestsScreen';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="intro"
						component={IntroScreen}
						navigationBarStyle={{ backgroundColor: '#1573E5' }}
						initial />
					<Scene
						key="createUser"
						component={CreateForm}
						title="SoMa"
						backTitle="Home"
						navigationBarStyle={{ backgroundColor: '#1573E5' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#000' }} />
					<Scene
						key="loginUser"
						component={LoginForm}
						title="SoMa"
						backTitle="Home"
						navigationBarStyle={{ backgroundColor: '#1573E5' }}
						backButtonImage={require('../assets/back.png')}
						backButtonTextStyle={{ color: '#000' }} />
				</Scene>

				<Scene key="stAuth">
					<Scene
						onRight={() => Actions.main()}
						rightButtonTextStyle={{ color: '#000' }}
						rightTitle="Posts"
						key="safeTrekAuth"
						component={SafeTrekAuthScreen}
						title="SafeTrek Authentication"
						navigationBarStyle={{ backgroundColor: '#1573E5' }}
					/>
				</Scene>

				<Scene
					tabs
					key="main"
					hideNavBar
					tabBarStyle={{ backgroundColor: '#1573E5' }}
					labelStyle={{ color: '#FFF' }}
					activeBackgroundColor="#1537e5"
					lazy
				>
					<Scene key="Buy/Sell" hideNavBar>
						<Scene key="buy">
							<Scene
								onLeft={() => Actions.sell()}
								leftButtonTextStyle={{ color: '#000' }}
								leftTitle="Sell"
								onRight={() => Actions.postCreate()}
								rightButtonTextStyle={{ color: '#000' }}
								rightTitle="Make Post"
								key="buyList"
								component={BuyersList}
								title="Buy"
								renderBackButton={() => (null)}
								navigationBarStyle={{ backgroundColor: '#1573E5' }}
							/>
							<Scene
								key="postCreate"
								component={PostCreate}
								onBack={() => Actions.pop()}
								title="Create a Post"
								backTitle="Buy"
								navigationBarStyle={{ backgroundColor: '#1573E5' }}
								backButtonImage={require('../assets/back.png')}
								backButtonTextStyle={{ color: '#000' }}
							/>
							<Scene
								key="mapScreen"
								component={MapScreen}
								title="Drag to a Meeting Point"
								backTitle="Back"
								navigationBarStyle={{ backgroundColor: '#1573E5' }}
								backButtonImage={require('../assets/back.png')}
								backButtonTextStyle={{ color: '#000' }}
							/>
						</Scene>
						<Scene key="sell">
							<Scene
								onLeft={() => Actions.pop()}
								leftButtonTextStyle={{ color: '#000' }}
								leftTitle="Buy"
								onRight={() => Actions.postCreateSell()}
								rightButtonTextStyle={{ color: '#000' }}
								rightTitle="Make Post"
								key="sellList"
								component={SellersList}
								title="Sell"
								renderBackButton={() => (null)}
								navigationBarStyle={{ backgroundColor: '#1573E5' }}
							/>
							<Scene
								key="postCreateSell"
								component={PostCreate}
								onBack={() => Actions.pop()}
								title="Create a Post"
								backTitle="Sell"
								navigationBarStyle={{ backgroundColor: '#1573E5' }}
								backButtonImage={require('../assets/back.png')}
								backButtonTextStyle={{ color: '#000' }}
							/>
							<Scene
								key="mapScreen"
								component={MapScreen}
								title="Drag to a Meeting Point"
								backTitle="Back"
								navigationBarStyle={{ backgroundColor: '#1573E5' }}
								backButtonImage={require('../assets/back.png')}
								backButtonTextStyle={{ color: '#000' }}
							/>
						</Scene>
					</Scene>

					<Scene
						key="Interests"
						component={InterestsScreen}
						title="Interests"
						navigationBarStyle={{ backgroundColor: '#1573E5' }}
					/>

					<Scene
						key="transaction"
						component={TransactioningScreen}
						title="Transaction"
						backTitle="Buy"
						navigationBarStyle={{ backgroundColor: '#1573E5' }}
					/>
				</Scene>
			</Stack>
		</Router>
	);
};

export default RouterComponent;