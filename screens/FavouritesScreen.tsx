import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';
// import {FavouritesContext} from '../store/context/favourites-context';

const FavouritesScreen = () => {
  // const favouriteMealsCtx = React.useContext(FavouritesContext);
  const favouriteMealId = useSelector((state: any) => state.favouriteMeals.ids);
  const favouriteMeals = MEALS.filter(meal =>
    favouriteMealId?.ids?.includes(meal.id),
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourites meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
