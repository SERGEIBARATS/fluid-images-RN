import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constans/constans';
import OneItem from '../common/OneItem';
import { loadShopList, selectShoe } from '../../actions';
import { RootState } from '../../reducers';


interface Shoe {
  id: number,
  imageSource: string,
  setArray: any
}

const Shop = ({ navigation }:any) => {
  const dispatch = useDispatch()
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    if (firstLoad) {
      dispatch(loadShopList());
      setFirstLoad(false);
    }
  }, []);
  
  const { ShopReducer: { shop } } = useSelector((state: RootState) => state)

  const navigateToSelected = (id: number, imageSource: string, title: string, description: string, price: number) => {
    dispatch(selectShoe(id, imageSource, title, description, price));
    navigation.navigate('specificItemScreen', { id });
  };

  const renderShoes = () => {
    return (
      <View style={styles.renderShoesStyle}>
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={shop}
          renderItem={({ item }: any) => <OneItem index={item.id} imageSource={item.imageSource} navigation={navigation} title={item.title} description={item.description} price={item.price} navigateToSelected={navigateToSelected} />}
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
      <View>
        <Text style={styles.textShoesStyle}>
            Shoes
        </Text>
      </View>
      <View style={{ flex: 1, paddingTop: 10 }}>

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
  },
  renderShoesStyle: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default Shop;
