import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constans/constans';
import CartItem from '../common/CartItem';
import { RootState } from '../../reducers';


interface Shoe {
  id: number,
  imageSource: string
}
const Cart = ({ navigation }:any) => {
  const { CartReducer: { Cart, totalPrice }, } = useSelector((state: RootState) => state)
  const renderShoes = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          data={Cart}
          renderItem={({ item }: any) => <CartItem index={item.id} description={item.description} imageSource={item.imageSource} navigation={navigation} price={item.price} size={item.size} quantity={item.quantity} />}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBarStyle}>
        <TouchableOpacity>
          <Ionicons name="ios-arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.textAdidasContainer}>
          <Text style={styles.textAdidas}>adidas</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="search1" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={styles.lineStyle}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={[styles.textShoesStyle, { color: 'rgb(226,84,87)' }]}>
            My Bag
        </Text>
        <Text style={styles.textShoesStyle}>
            Total:
          {totalPrice}
            $
        </Text>
      </View>
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
    justifyContent: 'space-between',
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

export default Cart;
