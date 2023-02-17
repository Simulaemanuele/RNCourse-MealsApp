import * as React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';
import Category from '../models/category';

const renderCategoryItem = (itemData: any) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
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
