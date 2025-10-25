import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect } from 'react'
import { ScreenStyle } from '../../styles/defaultScreenStyle'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { getNowPlayingMovies, getPopulerMovies, getTopRatedMovies, getUpcomingMovies } from '../../store/actions/moviesActions'
import Section from '../../components/home/section'
import { CATEGORIES } from '../../utils/constants'
import NotificationsCard from '../../components/notifications/notificationsCard'

import messaging from '@react-native-firebase/messaging';
const Home:React.FC = () => {

  const {populerMovies,upcomingMovies,topRatedMovies,nowPlayingMovies } = useSelector((state: RootState) => state.movies);

  const dispatch:AppDispatch=useDispatch()

  
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      const token = await messaging().getToken();
      console.log('Authorization status:', authStatus,token);
    }
  }
  useEffect( ()=>{
    requestUserPermission()
  dispatch(getPopulerMovies())
  dispatch(getNowPlayingMovies())
  dispatch(getTopRatedMovies())
  dispatch(getUpcomingMovies())
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;
  },[])

  const sections =[
    {
      id:1,
      sectionTitle:"Now Playing",
      category:CATEGORIES.NOWPLAYING,
      data: nowPlayingMovies
    },
    {
      id:2,
      sectionTitle:"Popular",
      category:CATEGORIES.POPULER,
      data: populerMovies
    },
    {
      id:3,
      sectionTitle:"Top Rated",
      category:CATEGORIES.TOPRATED,
      data: topRatedMovies
    },
    {
      id:4,
      sectionTitle:"Upcoming",
      category:CATEGORIES.UPCOMING,
      data: upcomingMovies
    }
  ]

  return (
    <View style={ScreenStyle.container}>

    <FlatList

    data={sections}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item})=>(
<Section title={item.sectionTitle} data={item.data} category={item.category}/>
    )}
    />
    </View>
  )
}

export default memo (Home)

const styles = StyleSheet.create({
    container:{
        flex:1,

       
    }
})