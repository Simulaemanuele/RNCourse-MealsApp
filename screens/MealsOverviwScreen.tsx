import * as React from 'react';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, Text, View} from 'react-native';

const MealsOverviwScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
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
