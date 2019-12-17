import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ModalScreen from './Screens/ModalScreen';
import TabWelcome from './Screens/TabWelcome';
import IconWithBadge from './Components/IconWithBadge';

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

const TabNavigator = createBottomTabNavigator(
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

const App = createAppContainer(TabNavigator);

export default App;
