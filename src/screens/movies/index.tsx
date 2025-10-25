import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { ScreenStyle } from '../../styles/defaultScreenStyle'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import MovieCard from '../../components/movies/movieCard'
import { CATEGORIES } from '../../utils/constants'
import CategoryCard from '../../components/movies/categoryCard'


const MovieList:React.FC<{ navigation: any; route: any }> = ({navigation,route}) => {



const {populerMovies,upcomingMovies,topRatedMovies,nowPlayingMovies,categories ,selectedCategory} = useSelector((state: RootState) => state.movies);

const categoryData=() =>{
  switch(selectedCategory?.category) {
    case CATEGORIES.NOWPLAYING :
      return nowPlayingMovies

      case CATEGORIES.POPULER :
        return populerMovies

        case CATEGORIES.TOPRATED :
          return topRatedMovies

          case CATEGORIES.UPCOMING:
            return upcomingMovies
  }
}

const filterData = useMemo(() => categoryData(), [selectedCategory]);


  return (
    <View style={ScreenStyle.container}>
      <FlatList
  horizontal
    data={categories}
    renderItem={({item})=> <CategoryCard category={item}/>}
 
    />
    <FlatList
       numColumns={2}
    data={filterData}
    renderItem={({item})=> <MovieCard movie={item}/>}
 
    />
    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
   
  }
})