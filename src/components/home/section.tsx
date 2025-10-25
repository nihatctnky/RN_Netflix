import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import SectionTitle from './sectionTitle';
import MovieCard from '../movies/movieCard';
import { SectionProps } from '../../models/uı/sectionProps';
import { useNavigation } from '@react-navigation/native';
import { MOVIELIST } from '../../utils/route';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/slice/moviesSlice';


const Section: React.FC<SectionProps> = ({ data, title,category}) => {
  const navigation =useNavigation()
  const dispatch:AppDispatch=useDispatch()
 const handleNavigate = useCallback(() =>{
  dispatch(setCategory(category))
  navigation.navigate(MOVIELIST)
  },[])
  return (
    <View style={{flex:1,marginHorizontal:4}}>
      <SectionTitle title={title}  onPress={handleNavigate} />
      <FlatList
      contentContainerStyle={{bottom:10}}
      data={data}
      renderItem={({item})=> <MovieCard  movie={item}/>}
      horizontal
      />
    </View>
  );
};

export default memo (Section);

const styles = StyleSheet.create({});
