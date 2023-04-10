import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import HeroScreen from '../screens/HeroScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MainScreen"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="HeroScreen" component={HeroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;