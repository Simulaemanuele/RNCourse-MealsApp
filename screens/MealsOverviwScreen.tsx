import * as React from 'react';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, Text, View, FlatList, ListRenderItem} from 'react-native';
import type {RouteProp} from '@react-navigation/native';
import MealItem, {MealItemProps} from '../components/MealItem';
import Meal from '../models/meal';

const MealsOverviwScreen = ({route}: {route: RouteProp<any>}) => {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData: any) => {
    const item = itemData.item;

    const mealItemProps: MealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviwScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
