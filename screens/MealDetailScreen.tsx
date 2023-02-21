import {NavigationProp, RouteProp} from '@react-navigation/native';
import * as React from 'react';
import {View, Text} from 'react-native';

const MealDetailScreen = ({route}: {route: RouteProp<any>}) => {
  const mealId = route.params?.mealId;
  return (
    <View>
      <Text>This is the meal detail screen ({mealId})</Text>
    </View>
  );
};

export default MealDetailScreen;
