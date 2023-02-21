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
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviwScreen from './screens/MealsOverviwScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}>
          <Stack.Screen
            name={'MealsCategories'}
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name={'MealsOverview'}
            component={MealsOverviwScreen}
            // options={({
            //   route,
            //   navigation,
            // }: {
            //   route: RouteProp<any>;
            //   navigation: NavigationProp<any>;
            // }) => {
            //   const catId = route.params?.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name={'MealDetail'}
            component={MealDetailScreen}
            options={{
              title: 'Meal Detail Screen',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
