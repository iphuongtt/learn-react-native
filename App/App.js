import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Welcome: {screen: WelcomeScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(MainNavigator);

export default App;
