import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from './screen/Product';
import Home from './screen/Home';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} options={{ headerShown: false }} />
      <Tab.Screen name="Product" component={Product} />
    </Tab.Navigator>
  );
}

export default App = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar hidden={true} /> */}
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
};
