import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import OneCircleItem from './oneCircleItem';
import shoesArray from '../../../../data/shoesArray.json';

interface Shoe {
    id: number,
    imageSource: string
}

const HorizontalListCircle = () => {
  const renderShoes = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={shoesArray.results}
        keyExtractor={(item: Shoe) => item.id.toString()}
        renderItem={({ item }: any, index:number) => <OneCircleItem index={index} imageSource={item.imageSource} />}
      />
    );
  };

  return (
    <View style={styles.containerRender}>
      {renderShoes()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerRender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6 }
});


export default HorizontalListCircle;
