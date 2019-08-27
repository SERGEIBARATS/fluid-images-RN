import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constans/constans';
import CartItem from '../common/CartItem';


interface Shoe {
  id: number,
  imageSource: string
}
const Cart = ({ navigation, Cart, totalPrice }:any) => {
  const renderShoes = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          data={Cart}
          keyExtractor={(item: Shoe) => item.id}
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
          <Ionicons name="ios-search" size={25} color="black" />
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
          {' '}
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


const mapStateToProps = (state: any) => {
  const { cart: { Cart, totalPrice }, } = state;
  return { Cart, totalPrice };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
