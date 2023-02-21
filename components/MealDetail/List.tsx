import * as React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const List = ({data}: {data: any[]}) => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      {data.map((dataPoint: any) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
