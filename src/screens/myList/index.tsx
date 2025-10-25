import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenStyle } from '../../styles/defaultScreenStyle'

const MyList:React.FC = () => {
  return (
    <View style={ScreenStyle.container}>
      <Text>MyList</Text>
    </View>
  )
}

export default MyList

const styles = StyleSheet.create({})