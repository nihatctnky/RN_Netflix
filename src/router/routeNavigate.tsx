import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accounts from '../screens/accounts';
import { ACCOUNTS, DOWNLOADS, MOVIEDETAIL, MOVIELIST, NOTIFICATIONS, TAB } from '../utils/route';
import BottomTabNavigate from './bottomTabNavigate';
import MovieList from '../screens/movies/index';
import MovieDetail from '../screens/movies/movieDetail';
import Notifications from '../screens/nottifications';
import Downloads from '../screens/downloads';

const RouteNavigate: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
    
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <Stack.Navigator
        screenOptions={{
          headerBackTitle: "Back",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name={TAB} component={BottomTabNavigate} />
        <Stack.Screen name={ACCOUNTS} component={Accounts} />
        <Stack.Screen name={MOVIELIST} component={MovieList} />
        <Stack.Screen name={MOVIEDETAIL} component={MovieDetail} />
        <Stack.Screen name={NOTIFICATIONS} component={Notifications} />
        <Stack.Screen name={DOWNLOADS} component={Downloads} />
      </Stack.Navigator>
    </>
  )
}

export default RouteNavigate
