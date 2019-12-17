import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ModalScreen from './Screens/ModalScreen';

const MainStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Welcome: {screen: WelcomeScreen},
  },
  {
    initialRouteName: 'Home',
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
    Main: {screen: MainStack},
    Modal: {screen: ModalScreen},
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const App = createAppContainer(RootStack);

export default App;
