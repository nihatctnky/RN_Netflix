import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DOWNLOADS, HOME, SEARCH, MYLIST, NOTIFICATIONS } from '../utils/route';
import Home from '../screens/Home';
import Search from '../screens/search';
import Downloads from '../screens/downloads';
import TabbarIcon from '../components/router/tabbarIcon';
import MyList from '../screens/myList';

import { Notification } from 'iconsax-react-native';
import Notifications from '../screens/nottifications';



const BottomTabNavigate = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route,navigation }) => ({
      tabBarStyle: {
        backgroundColor: 'black',
        
        
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      tabBarLabelStyle: {
        color: 'white',
        padding:14,
        
      },
      tabBarIcon: ({size,focused,color}) => (
        <TabbarIcon name={route.name} color={color}  focused={focused} size={size}/>
      ),
      tabBarActiveTintColor:"white",
      headerRight:() => <TouchableOpacity 
      onPress={()=>navigation.navigate(NOTIFICATIONS)}
      style={{margin:21}}>
        
        <Notification color='white' size={26}/>
      </TouchableOpacity>
  
      
    })}
  >
    <Tab.Screen name={HOME} component={Home} />
    <Tab.Screen name={MYLIST} component={MyList} />
    <Tab.Screen name={SEARCH} component={Search} />
    <Tab.Screen name={DOWNLOADS} component={Downloads} />
   
  </Tab.Navigator>
  )
}

export default BottomTabNavigate