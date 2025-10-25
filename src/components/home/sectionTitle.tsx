import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{memo} from 'react';
import { SectionTitleProps } from '../../models/uı/sectionTitleProps';


const SectionTitle:React.FC<SectionTitleProps> = ({ title ,onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
      }}
    >
      <Text
        style={{
          color: 'white',
          marginVertical: 12,
          fontSize: 18,
          fontWeight: '900',
          marginHorizontal: 8,
        }}
      >
        {title}
      </Text>

      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: 'yellow',
            marginVertical: 12,
            fontSize: 18,
            fontWeight: '900',
            marginHorizontal: 12,
          }}
        >
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(SectionTitle);

const styles = StyleSheet.create({});
