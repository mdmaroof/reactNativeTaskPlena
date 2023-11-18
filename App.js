import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from './screen/Product';
import Home from './screen/Home';
import Cart from './screen/Cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator independent={true} >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Product" component={Product} />
    </Tab.Navigator>
  );
}

const Navigation = (props) => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'
      >
        <Stack.Screen name="HomeTab" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
};
