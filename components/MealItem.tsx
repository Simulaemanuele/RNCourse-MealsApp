import * as React from 'react';
import {View, Text} from 'react-native';

const MealItem = ({title}: {title: string}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
