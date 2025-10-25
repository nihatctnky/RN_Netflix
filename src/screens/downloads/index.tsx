import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ScreenStyle } from '../../styles/defaultScreenStyle';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // TMDB örneği

const Downloads: React.FC = () => {
  const movieDetailData = useSelector(
    (state: RootState) => state.download.downloadedMovie
  );

  if (!movieDetailData) {
    return (
      <View style={ScreenStyle.container}>
        <Text style={styles.noDataText}>No download selected.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={ScreenStyle.container}>
    
      {movieDetailData.poster_path && (
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${movieDetailData.poster_path}` }}
          style={styles.poster}
          resizeMode="cover"
        />
      )}

      <Text style={styles.title}>{movieDetailData.title}</Text>
      <Text style={styles.detail}>Release Date: {movieDetailData.release_date}</Text>
      <Text style={styles.detail}>Overview: {movieDetailData.overview}</Text>
    </ScrollView>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  container:{
bottom:18
  },
  poster: {
    top:12,
    width: 200,
    height: 300,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    top:4,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detail: {
    top:8,
    color: 'white',
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  noDataText: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
});
