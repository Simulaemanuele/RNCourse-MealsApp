import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Meal from '../../models/meal';
import MealItem, {MealItemProps} from './MealItem';

const MealsList = ({items}: {items: Meal[]}) => {
  const renderMealItem = (itemData: any) => {
    const item = itemData.item;
    const mealItemProps: MealItemProps = {
      id: item.id,
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
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
