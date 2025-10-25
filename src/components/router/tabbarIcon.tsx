import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import { TabbarIconProps } from '../../models/uı/tabbarIconProps';
import { DOWNLOADS, HOME, MYLIST, SEARCH } from '../../utils/route';
import {
  ArrowCircleDown2,
  Home2,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-native';

const TabbarIcon: React.FC<TabbarIconProps> = ({
  name,
  size,
  focused,
  color,
}) => {
  const iconStyle = {
    margin: 19,
    top:8
  
  };
  switch (name) {
    case HOME:
      return (
        <Home2
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
          style={iconStyle}
        />
      );
    case MYLIST:
      return (
        <VideoPlay
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
          style={iconStyle}
        />
      );
    case SEARCH:
      return (
        <SearchNormal1
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
          style={iconStyle}
        />
      );
    case DOWNLOADS:
      return (
        <ArrowCircleDown2
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
          style={iconStyle}
        />
      );
  }
};

export default TabbarIcon;

const styles = StyleSheet.create({});
