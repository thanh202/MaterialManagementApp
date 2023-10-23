import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import BottomTabs from './BottomTabs';
import DetailProduct from '../screens/DetailProduct';
import {Provider} from 'react-redux';
import store from '../redux/store';
import TermsAndCondition from '../screens/TermsAndCondition';
import ProfileCustomer from '../screens/ProfileCustomer';
import EditProfile from '../screens/EditProfile';
import TransactionHistory from '../screens/TransactionHistory';
import DetailStatistic from '../screens/DetailStatistic';
import Language from '../screens/Language';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bottomTab"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="detailProduct"
            component={DetailProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="editProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="termsAndConditions"
            component={TermsAndCondition}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="profileCustomer"
            component={ProfileCustomer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="transactionHistory"
            component={TransactionHistory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="detailStatistics"
            component={DetailStatistic}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="language"
            component={Language}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
