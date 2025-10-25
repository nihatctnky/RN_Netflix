import { Dimensions } from 'react-native';
import { API_KEY as ENV_API_KEY, token as ENV_TOKEN } from '@env'; // @env değişkenlerini ata

export enum CATEGORIES {
  POPULER = 'populer',
  TOPRATED = 'topRated',
  NOWPLAYING = 'nowPlaying',
  UPCOMING = 'upcoming',
}

export const API_KEY = ENV_API_KEY;
export const TOKEN = ENV_TOKEN;
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
