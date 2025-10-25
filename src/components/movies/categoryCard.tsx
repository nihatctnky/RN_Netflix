import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CategoryCardProps } from '../../models/uı/categoryCardProps';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/slice/moviesSlice';
import { screenHeight, screenWidth } from '../../utils/constants';

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { selectedCategory } = useSelector((state: RootState) => state.movies);
  const dispatch: AppDispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category.category))}
      style={[
        styles.container,
        {
          backgroundColor:
            selectedCategory.category == category.category ? 'white' : 'black',
        },
      ]}
    >
      <Text
        style={{
          color:
            selectedCategory.category == category.category ? 'black' : 'white',
          fontSize: 18,
        }}
      >
        {category.categoryTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: screenWidth / 3,
    height: screenHeight * 0.05,
    borderRadius: 1000,
    bottom:12
  },
});
