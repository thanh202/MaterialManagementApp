import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/Home';
import {sizes} from '../utils/constants';
import {colors} from '../assets/colors';
import Cart from '../screens/Cart';
import QrCode from '../screens/QrCode';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import {icons} from '../assets/icons';

const Tab = createBottomTabNavigator();

const CustomTabBarBottomNavigator = ({children, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <LinearGradient
        colors={[colors.blue, colors.purple]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          width: sizes.widthScreen / 7,
          height: sizes.widthScreen / 7,
          borderRadius: sizes.widthScreen / 7,
        }}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: sizes.widthScreen / 7,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={icons.home}
              style={{tintColor: focused ? colors.blue : 'black'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={icons.cart}
              style={{tintColor: focused ? colors.blue : 'black'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="qr"
        component={QrCode}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={icons.qrCode}
              style={{width: 28, height: 28, tintColor: 'white'}}
            />
          ),
          tabBarButton: prop => {
            return <CustomTabBarBottomNavigator {...prop} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={icons.notification}
              style={{tintColor: focused ? colors.blue : 'black'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={icons.person}
              style={{tintColor: focused ? colors.blue : 'black'}}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
