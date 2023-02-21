import {NavigationProp, RouteProp} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = ({route}: {route: RouteProp<any>}) => {
  const mealId = route.params?.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <Image source={{uri: selectedMeal?.imageUrl}} />
      <Text>{selectedMeal?.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal?.duration}
          affordability={selectedMeal?.affordability}
          complexity={selectedMeal?.complexity}
        />
      </View>
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: any) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step: any) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;
