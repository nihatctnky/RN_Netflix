import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonProps } from '../../models/uı/buttonProps'

const Button:React.FC<ButtonProps> = ({title,Icon,onPress,backgroundColor,titleColor="black"}) => {
  return (
    <View style={styles.container}>
     <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
      onPress={onPress}
     >
      
        {Icon}
     <Text style={[styles.title,{color:titleColor}]}>{title}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        flex:1
      
    },
    button:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:10,
        margin:5,
        borderRadius:10
    },
    title:{
        fontSize:18,
        fontWeight:500,
        marginLeft:10
    }
})