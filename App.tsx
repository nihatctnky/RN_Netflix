import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RouteNavigate from './src/router/routeNavigate';
import { Provider } from 'react-redux';
import { store } from './src/store/store';




const App : React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
    <RouteNavigate />
  </NavigationContainer>
    </Provider>
  )
}

export default App