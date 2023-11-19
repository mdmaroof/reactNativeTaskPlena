import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Product from './screen/Product';
import Home from './screen/Home';
import Cart from './screen/Cart';
import { MainProvider } from './context/mainContext';
import categories from './tabs/categories';
import { CategoriesIcon, HomeIcon, MoreIcon } from './assets/svg/topBarIcon';
import { FavoriteIcon2 } from './assets/svg/favouriteIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // independent={true} tabBar={(props, index) => <MyTabBar {...props} />}

      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: Platform.OS === 'ios' && 90 || 60,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={focused ? styles.focused : styles.alignCenter}>
            <HomeIcon color={focused && '#E0B420'} />
            {!focused && (<Text>Home</Text>)}
          </View>
        )
      }} />
      <Tab.Screen name="Categories" component={categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : styles.alignCenter}>
              <CategoriesIcon color={focused && '#E0B420'} />
              {!focused && (<Text>Categories</Text>)}
            </View>
          )
        }}
      />
      < Tab.Screen name="Favorite" component={categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : styles.alignCenter}>
              <FavoriteIcon2 fill={focused && '#E0B420'} />
              {!focused && (<Text>Favorite</Text>)}
            </View>
          )
        }}
      />
      < Tab.Screen name="More" component={categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : styles.alignCenter}>
              <MoreIcon color={focused && '#E0B420'} />
              {!focused && (<Text>More</Text>)}
            </View>
          )
        }}
      />
    </Tab.Navigator >
  );
}

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName='HomeTab'
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


const styles = StyleSheet.create({
  focused: {
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    borderRadius: 50,
    backgroundColor: '#1E222B',
    width: 60,
    height: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  alignCenter: {
    alignItems: 'center'
  }
});
