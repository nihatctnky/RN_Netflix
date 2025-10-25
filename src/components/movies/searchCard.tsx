import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieCardProps } from '../../models/uı/movieCardProps'
import { Play } from 'iconsax-react-native'
import { IMAGE_BASE_URL } from '../../service/urls'
import { useNavigation } from '@react-navigation/native'
import { MOVIEDETAIL } from '../../utils/route'

const SearchCard:React.FC<MovieCardProps> = ({movie}) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(MOVIEDETAIL,{movieId:movie.id})}
    activeOpacity={0.9}
    style={styles.container}>
      <View>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'stretch',
          borderRadius: 12,
          margin:18
    
        }}
      />
      </View>
  
      <View style={{flex:1,justifyContent:"center",marginHorizontal:15}}>
      <Text numberOfLines={1} style={{color:"white",fontSize:21}}>{movie.title}</Text>
        </View>

        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Play  size={30} color="white" variant='Bold'/>
        </View>
     
    </TouchableOpacity>
  )
}

export default SearchCard

const styles = StyleSheet.create({
    container:{
     
        
        flexDirection:"row"
    }
})