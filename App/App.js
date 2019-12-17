import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ModalScreen from './Screens/ModalScreen';
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

const App = createAppContainer(DrawerStack);

export default App;
