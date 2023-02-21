import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import MealDetails from './MealDetails';

export type MealItemProps = {
  id?: string;
  title?: string;
  imageUrl?: string;
  duration: number;
  complexity: string;
  affordability: string;
  style?: any;
  textStyle?: any;
};

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate(
      'MealDetail' as never,
      {
        mealId: id,
      } as never,
    );
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'white',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
