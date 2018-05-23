import React from 'react';
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

const BACK_BUTTON = require('../assets/back.png');

const RouterComponent = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="auth">
        <Scene
          key="intro"
          component={IntroScreen}
          navigationBarStyle={{ backgroundColor: '#FFF' }}
          initial
        />
        <Scene
          key="createUser"
          component={CreateForm}
          title="SoMa"
          backTitle="Home"
          navigationBarStyle={{ backgroundColor: '#0076FE' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#000' }}
        />
        <Scene
          key="loginUser"
          component={LoginForm}
          title="SoMa"
          backTitle="Home"
          navigationBarStyle={{ backgroundColor: '#0076FE' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#000' }}
        />
      </Scene>

      <Scene key="stAuth">
        <Scene
          onRight={() => Actions.main()}
          rightButtonTextStyle={{ color: '#000' }}
          rightTitle="Posts"
          key="safeTrekAuth"
          component={SafeTrekAuthScreen}
          title="SafeTrek Authentication"
          navigationBarStyle={{ backgroundColor: '#0076FE' }}
        />
      </Scene>

      <Scene
        tabs
          // tabBarOnPress={() => Actions.refresh()}
        key="main"
        hideNavBar
        tabBarStyle={{ backgroundColor: '#0076FE' }}
        labelStyle={{ color: '#FFF' }}
        activeBackgroundColor="#1537e5"
      >
        <Scene
          key="Home"
          hideNavBar
          tabs
          tabBarPosition="top"
          tabBarStyle={{ paddingTop: 25 }}
        >
          <Scene key="buy" hideNavBar>
            <Scene
              onRight={() => Actions.postCreate()}
              rightButtonTextStyle={{ color: '#000' }}
              rightTitle="Make Post"
              key="buyList"
              component={BuyersList}
              title="Home"
              renderBackButton={() => null}
              navigationBarStyle={{ backgroundColor: '#0076FE' }}
            />
            <Scene
              key="mapScreen"
              component={MapScreen}
              title="Drag to a Meeting Point"
              backTitle="Back"
              navigationBarStyle={{ backgroundColor: '#0076FE' }}
              backButtonImage={BACK_BUTTON}
              backButtonTextStyle={{ color: '#000' }}
            />
          </Scene>
          <Scene key="sell" hideNavBar>
            <Scene
              onLeft={() => Actions.pop()}
              leftButtonTextStyle={{ color: '#000' }}
              leftTitle="Buy"
              onRight={() => Actions.postCreateSell()}
              rightButtonTextStyle={{ color: '#000' }}
              rightTitle="Make Post"
              key="sellList"
              component={SellersList}
              title="Home"
              renderBackButton={() => null}
              navigationBarStyle={{ backgroundColor: '#0076FE' }}
            />
            <Scene
              key="postCreateSell"
              component={PostCreate}
              onBack={() => Actions.pop()}
              title="Create a Post"
              backTitle="Sell"
              navigationBarStyle={{ backgroundColor: '#0076FE' }}
              backButtonImage={BACK_BUTTON}
              backButtonTextStyle={{ color: '#000' }}
            />
            <Scene
              key="mapScreen"
              component={MapScreen}
              title="Drag to a Meeting Point"
              backTitle="Back"
              navigationBarStyle={{ backgroundColor: '#0076FE' }}
              backButtonImage={BACK_BUTTON}
              backButtonTextStyle={{ color: '#000' }}
            />
          </Scene>
        </Scene>

        <Scene
          key="Interests"
          component={InterestsScreen}
          title="Interests"
          navigationBarStyle={{ backgroundColor: '#0076FE' }}
        />

        <Scene
          key="transaction"
          component={TransactioningScreen}
          title="Transaction"
          backTitle="Buy"
          navigationBarStyle={{ backgroundColor: '#0076FE' }}
        />
        <Scene
          key="postCreate"
          component={PostCreate}
          onBack={() => Actions.pop()}
          title="Create a Post"
          backTitle="Buy"
          navigationBarStyle={{ backgroundColor: '#0076FE' }}
          backButtonImage={BACK_BUTTON}
          backButtonTextStyle={{ color: '#000' }}
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponent;
