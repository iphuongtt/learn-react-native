import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ModalScreen from './Screens/ModalScreen';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import AuthLoadingScreen from './Screens/AuthLoadingScreen';
import AnimationTest from './Screens/AnimationTest';
import TabWelcome from './Screens/TabWelcome';
import IconWithBadge from './Components/IconWithBadge';

const HomeIcon = require('./Assets/Images/home.png');
const WelcomeIcon = require('./Assets/Images/welcome.png');

const MainStack = createStackNavigator(
  {
    Main_Home: {screen: HomeScreen},
    Main_Welcome: {screen: WelcomeScreen},
  },
  {
    initialRouteName: 'Main_Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Root_Main: {screen: MainStack},
    Root_Modal: {screen: ModalScreen},
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const TabStack = createBottomTabNavigator(
  {
    Tab_Home: {
      screen: RootStack,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
      }),
    },
    Tab_Welcome: {
      screen: TabWelcome,
      navigationOptions: ({ navigation }) => ({
        title: 'Welcome',
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Tab_Home') {
          iconName = 'md-home';
          IconComponent = (props) => <IconWithBadge {...props } badgeCount={3} />
        } else if (routeName === 'Tab_Welcome') {
          iconName = 'md-options';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }
    })
  }
);

const DrawerStack = createDrawerNavigator({
  Drawer_Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Image
          source= {HomeIcon}
          style={[ styles.icon, { tintColor }]}
        />
      )
    }
  },
  Drawer_Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      drawerLabel: 'Welcome',
      drawerIcon: ({tintColor}) => (
        <Image
          source= {WelcomeIcon}
          style={[ styles.icon, { tintColor }]}
        />
      )
    }
  },
  Drawer_Tab: {
    screen: TabStack,
  },
})

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        header: null,
      }
    },
    AnimatedSignIn: {
      screen: AnimationTest,
      navigationOptions: {
        header: null,
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
      }
    },
  },
  {
    initialRouteName: 'AnimatedSignIn'
  }
)

const App = createAppContainer(createAnimatedSwitchNavigator(
  {
    App: DrawerStack,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'Auth',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    )
  }
));

export default App;
