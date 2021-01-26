import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Transition } from 'react-navigation-fluid-transitions';

interface itemInterace {
  imageSource: string,
  navigation: any,
  index: any,
  title: string,
  description: string,
  price: string,
  mapStoreListOfShoes: any,
  navigateToSelected: any
}
const OneItem = ({ imageSource, index, title, description, price, navigateToSelected }: itemInterace) => {

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
  console.log(imageSource)
  return (
    <TouchableOpacity
      style={{ height: 230 }}
      onPress={() => navigateToSelected(index, imageSource, title, description, price)}
    >
      <View key={index} style={styles.body}>
        <View style={styles.imageContainer}>
          <Transition shared={`image${index}`}>

            <Image
              style={styles.image}
              source={{ uri: imageSource, cache: 'force-cache' }}
              resizeMode="contain"
              onLoadEnd={() => {
                fadeOutAction();
              }}
            />
          </Transition>
        </View>

        <Text style={styles.genderText}>
$
          {title}
        </Text>
        <View style={styles.modelTextContainer}>
          <Text style={styles.modelText}>
$
            {description}
          </Text>
          <Text style={styles.modelText}>
                TRIPLE BLACK
          </Text>
          <View style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 1,
            marginTop: 3 }}
          >
            <View style={{ paddingHorizontal: 1 }}><FontAwesome name="star" size={10} /></View>
            <View style={{ paddingHorizontal: 1 }}><FontAwesome name="star" size={10} /></View>
            <View style={{ paddingHorizontal: 1 }}><FontAwesome name="star" size={10} /></View>
            <View style={{ paddingHorizontal: 1 }}><FontAwesome name="star-half-empty" size={10} /></View>
            <View style={{ paddingHorizontal: 1 }}><FontAwesome name="star-o" size={10} /></View>
            <View style={{ paddingHorizontal: 1 }}><Text style={styles.textRate}>165</Text></View>
          </View>
          <Text style={styles.textPrice}>{`${price}\$`}</Text>
        </View>
        <Animated.View style={[styles.imageContainer, { position: 'absolute', opacity: fadeOut }]}><ActivityIndicator size="large" color="#000" /></Animated.View>

      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  body: {
    height: 220,
    width: 100,
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
    backgroundColor: 'rgb(243,244,246)'
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'rgb(231,232,233)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 90,
    width: 90,
  },
  genderText: {
    color: 'gray',
    fontSize: 7,
    marginVertical: 10,
  },
  modelText: {
    fontSize: 9
  },
  modelTextContainer: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRate: {
    fontSize: 7,
    color: 'gray',
    paddingTop: 2
  },
  textPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(226,84,87)',
    paddingTop: 10
  },
});


export default OneItem;
