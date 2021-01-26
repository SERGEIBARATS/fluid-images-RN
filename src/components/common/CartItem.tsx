import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import { SCREEN_WIDTH } from '../../constans/constans';

interface itemInterace {
    imageSource: string,
    navigation: any,
    index: any,
    title: string,
    description: string,
    price: string,
    mapStoreListOfShoes: any
}
const cartItem = ({ imageSource, price, size, quantity, navigation, index, description }: itemInterace) => {
  debugger;
  const [loading, setLoading] = useState(true);
  const [fadeOut] = useState(new Animated.Value(1));
  const fadeOutAction = () => {
    Animated.timing(
      fadeOut,
      {
        toValue: 0,
        duration: 500,
      }
    ).start(() => setLoading(false));
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('specificItemScreen', { index })}
    >
      <View key={index} style={styles.body}>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: imageSource, cache: 'force-cache' }}
            resizeMode="contain"
            onLoadEnd={() => {
              fadeOutAction();
            }}
          />
        </View>

        <Animated.View style={[styles.imageContainer, { position: 'absolute', opacity: fadeOut }]}><ActivityIndicator size="large" color="#000" /></Animated.View>
        <View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', paddingHorizontal: 15, flex: 1 }}>
            <View style={styles.textContainerStyle}><Text style={styles.textStyle}>{description}</Text></View>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', paddingHorizontal: 15, flex: 1 }}>
            <View style={styles.textContainerStyle}>
              <Text style={styles.textStyle}>
price:
                <Text style={[styles.textStyle, { color: 'black' }]}>{price}</Text>
              </Text>
            </View>
            <View style={styles.textContainerStyle}>
              <Text style={styles.textStyle}>
size:
                <Text style={[styles.textStyle, { color: 'black' }]}>{size}</Text>
              </Text>
            </View>
            <View style={styles.textContainerStyle}>
              <Text style={[styles.textStyle]}>
quantity:
                <Text style={[styles.textStyle, { color: 'black' }]}>{quantity}</Text>
              </Text>
            </View>

          </View>
        </View>
      </View>

    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  body: {
    height: 60,
    width: SCREEN_WIDTH - 40,
    borderRadius: 30,
    backgroundColor: 'rgb(243,244,246)',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',

  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgb(231,232,233)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
  },
  textContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textStyle: {
    fontSize: 12,
    color: 'rgb(226,84,87)',
    fontWeight: '600',
  }
});


export default cartItem;
