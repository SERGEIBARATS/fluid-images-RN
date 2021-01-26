import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialFeather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialAntDesign from 'react-native-vector-icons/AntDesign';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import Bag from './components/cart/Cart';
import SpecificItem from './components/specificItem/specificItemContainer/specificItem';
import { TAB_BAR_MAX_HEIGHT } from './constans/constans';
import Shop from './components/shop/Shop';
import LoginPage from './components/loginPage/LoginPage';
import Favorites from './components/favorites/Favorites';

const FluidNavig = FluidNavigator({
  ShopScreen: { screen: ({ navigation }: any) => <Shop navigation={navigation} /> },
  specificItemScreen: {
    screen: ({ navigation }: any) => <SpecificItem navigation={navigation} />,
    navigationOptions: { }
  },
}, {
  defaultNavigationOptions: {
    gesturesEnabled: true,

  },
});

const MainRoot = createBottomTabNavigator({
  Home: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ focused }: any) => <AntDesign name="home" size={23} color={focused ? 'rgb(226,84,87)' : 'black'} />
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites',
      tabBarIcon: ({ focused }: any) => <MaterialAntDesign name="staro" size={20} color={focused ? 'rgb(226,84,87)' : 'black'} />
    },
  },
  Shop: {
    screen: FluidNavig,
    navigationOptions: {
      title: 'Shop',
      tabBarIcon: ({ focused }: any) => <AntDesign name="shoppingcart" size={20} color={focused ? 'rgb(226,84,87)' : 'black'} />
    },
  },
  Cart: {
    screen: Bag,
    navigationOptions: {
      title: 'wallet',
      tabBarIcon: ({ focused }: any) => <AntDesign name="wallet" size={20} color={focused ? 'rgb(226,84,87)' : 'black'} />
    },
  },
  Account: {
    screen: Bag,
    navigationOptions: {
      title: 'Account',
      tabBarIcon: ({ focused }: any) => <AntDesign name="user" size={20} color={focused ? 'rgb(226,84,87)' : 'black'} />
    },
  },
},
{ tabBarOptions: {
  activeTintColor: 'rgb(226,84,87)',
  inactiveTintColor: 'black',
  showIcon: true,
  style: {
    height: TAB_BAR_MAX_HEIGHT,
  },
  tabStyle: {
    height: TAB_BAR_MAX_HEIGHT,
  }
}
});


export default createAppContainer(MainRoot);
