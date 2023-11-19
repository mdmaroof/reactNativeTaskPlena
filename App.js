import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from './screen/Product';
import Home from './screen/Home';
import Cart from './screen/Cart';
import { MainProvider } from './context/mainContext';

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

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomeTab'
      >
        <Stack.Screen name="HomeTab" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MainProvider>
        <Navigation />
      </MainProvider>
    </View>
  );
};
