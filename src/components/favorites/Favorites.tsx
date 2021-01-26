import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constans/constans';
import CartItem from '../common/CartItem';
import { RootState } from '../../reducers';


interface Shoe {
  id: number,
  imageSource: string
}
const Favorites = ({ navigation }:any) => {
  const { FavoriteReducer: { favorite }, } = useSelector((state: RootState) => state)
  const renderShoes = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{
          }}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          data={favorite}
          renderItem={({ item }: any) => <CartItem index={item.id} description={item.description} imageSource={item.imageSource} navigation={navigation} price={item.price} size={item.size} quantity={item.quantity} />}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBarStyle}>
        <View style={styles.textAdidasContainer}>
          <Text style={styles.textAdidas}>adidas</Text>
        </View>
        <TouchableOpacity style={{}}>
          <AntDesign name="search1" size={20} color="rgb(226,84,87)" />
        </TouchableOpacity>
      </View>
      <View
        style={styles.lineStyle}
      />
      <Text style={[styles.textShoesStyle, { color: 'rgb(226,84,87)' }]}>
            Favorites
      </Text>

      <View style={{ flex: 1 }}>
        {renderShoes()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  topBarStyle: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    paddingHorizontal: 20

  },
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1.2,
    opacity: 0.3
  },
  textAdidasContainer: {
    alignItems: 'center',
    height: SCREEN_HEIGHT / 14,
    justifyContent: 'center',
    textAlign: 'center'
  },
  textAdidas: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e25457',
    alignSelf: 'center',
  },
  textShoesStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 15
  }
});

export default Favorites;
