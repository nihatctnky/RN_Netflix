import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { IMAGE_BASE_URL } from '../../service/urls';
import { MovieCardProps } from '../../models/uı/movieCardProps';
import { screenWidth } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/route';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(MOVIEDETAIL,{movieId:movie.id})}
    activeOpacity={0.8}
    style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={{
          width: 185,
          height: 300,
          resizeMode: 'contain',
          borderRadius: 12,
        }}
      />
      <Text
        style={{ fontSize: 16, color: 'white', fontWeight: 200 }}
        numberOfLines={1}
      >
        {movie.title}
      </Text>

      <Text
        style={{ fontSize: 16, color: 'white', fontWeight: 200 }}
        numberOfLines={1}
      >
       Rated:{movie.vote_average}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: screenWidth/2,
    margin: 5,
    marginHorizontal: 4,
    gap: 10,
  },
});
