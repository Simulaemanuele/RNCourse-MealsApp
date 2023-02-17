import * as React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {NavigationProp} from '@react-navigation/native';
import {CATEGORIES} from '../data/dummy-data';
import Category from '../models/category';

const CategoriesScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview');
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
