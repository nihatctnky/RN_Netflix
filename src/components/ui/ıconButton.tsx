import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButtonProps } from '../../models/uı/ıconButtonProps'

const IconButton:React.FC<IconButtonProps> = ({title,Icon}) => {
  return (
    <View style={styles.container}>
        {Icon}
      <Text style={{color:"white",fontSize:11}}>{title}</Text>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
    container:{
    
        justifyContent:"center",
        alignItems:"center",
   margin:27,
   gap:8
        
    }
})