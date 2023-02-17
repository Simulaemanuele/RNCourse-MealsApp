import * as React from 'react';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, Text, View} from 'react-native';
import type {RouteProp} from '@react-navigation/native';

const MealsOverviwScreen = ({route}: {route: RouteProp<any>}) => {
  const catId = route.params?.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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
