import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

interface ButtonProps {
  title: string;
  Icon?: ReactNode; 
  onPress?: (event: GestureResponderEvent) => void; 
  backgroundColor?: string;
  titleColor?: string;
}
export type {ButtonProps}