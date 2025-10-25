import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { ScreenStyle } from '../../styles/defaultScreenStyle';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../store/actions/moviesActions';
import { IMAGE_BASE_URL } from '../../service/urls';
import { screenHeight, screenWidth } from '../../utils/constants';
import IconButton from '../../components/ui/ıconButton';
import { Add, ArrowDown, Like1, Play, Send } from 'iconsax-react-native';
import Button from '../../components/ui/button';
import { useNavigation } from '@react-navigation/native';
import { DOWNLOADS } from '../../utils/route';
import { setDownloadedMovie } from '../../store/slice/downloadSlice';

const MovieDetail: React.FC = ({ route }) => {
  const navigation = useNavigation()
  const dispatch: AppDispatch = useDispatch();
  const { movieDetailData, pendingMovieDetail } = useSelector(
    (state: RootState) => state.movies,
  );
  const { movieId } = route.params;


  useEffect(() => {
    dispatch(getMovieDetail(movieId));
  }, []);

  return (
    <View style={ScreenStyle.container}>
      {pendingMovieDetail ? (
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <ActivityIndicator color={'gray'} size={'large'} />
        </View>
      ) : (
        <ScrollView style={{bottom:10}}>
          <ImageBackground
            source={{ uri: `${IMAGE_BASE_URL}${movieDetailData?.poster_path}` }}
            resizeMode='cover'
            style={{
              width: screenWidth*0.99,
              height: screenHeight*0.55,
            

            }}
          >
            <View
              style={{
                top: screenHeight * 0.55 - screenHeight * 0.1,
                left: 10,
                position: 'absolute',
              }}
            >
              <Image
                source={{
                  uri: `${IMAGE_BASE_URL}${movieDetailData?.poster_path}`,
                }}
                style={{
                  width: screenWidth / 3.5,
                  height: screenHeight * 0.18,
                  resizeMode: 'stretch',
                  borderRadius: 10,
                }}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
       
            }}
          >
            <IconButton
              title="My List"
              Icon={<Add color="white" size={25} />}
            />
            <IconButton title="Rate" Icon={<Like1 color="white" size={25} />} />
            <IconButton title="Share" Icon={<Send color="white" size={25} />} />
          </View>

          <View style={{marginVertical:5,marginHorizontal:5}}>
           <Text style={{color:"white",fontSize:18}}>{movieDetailData?.title}</Text>
          </View>

          {
        movieDetailData?.release_date && (
          <Text style={{color:"gray",fontSize:16,lineHeight:20,marginVertical:4,marginHorizontal:4}}>{movieDetailData?.release_date}</Text>
        )
       }
          

       {
        movieDetailData?.tagline && (
          <Text style={{color:"gray",fontSize:16,lineHeight:20,marginVertical:4,marginHorizontal:4}}>{movieDetailData?.tagline}</Text>
        )
       }
          
        

          <View style={{marginVertical:12}}>
            <Button
              backgroundColor="white"
              title="Play"
              Icon={<Play color="black" size={25} variant='Bold' />}

            />
           <Button
  titleColor="white"
  backgroundColor="gray"
  title="Download"
  Icon={<ArrowDown color="white" size={25} variant='Bold' />}
  onPress={() => {
    dispatch(setDownloadedMovie(movieDetailData)); 
    navigation.navigate(DOWNLOADS); 
  }}
/>
          </View>


          <View style={{marginVertical:15,paddingHorizontal:10}}>
            <Text style={{color:"white",fontSize:16,fontWeight:"500",lineHeight:20}}>{movieDetailData?.overview}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
