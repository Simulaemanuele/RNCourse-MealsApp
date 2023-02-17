/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

function App(): JSX.Element {
  return <CategoriesScreen />;
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
