import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import MaterialIonicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Transition } from 'react-navigation-fluid-transitions';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../constans/constans';
import { RootState } from '../../../../reducers';

const PictureSpecificItem = ({ navigation }: any) => {
  const { ShopReducer: { selectedItem }, } = useSelector((state: RootState) => state)
  const { imageSource, id } = selectedItem;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <View style={styles.backgroundStyle}>
        <TouchableOpacity onPress={() => {
          goBack();
        }}
        >
          <MaterialIonicons name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.textAdidasContainer}>
          <Text style={styles.textAdidas}>adidas</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Transition shared={`image${id}`}>
          <Image
            style={styles.image}
            source={{ uri: imageSource, cache: 'force-cache' }}
            resizeMode="contain"
          />
        </Transition>
      </View>
    </View>
  );
};

const w = SCREEN_WIDTH * 1.1;
const styles = StyleSheet.create({
  body: {
    height: SCREEN_HEIGHT * 0.35,
    width: w,
    top: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 0,
    backgroundColor: 'rgb(46,48,51)',
    borderBottomRightRadius: w / 2,
    borderBottomLeftRadius: w / 2,

  },
  backgroundStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: SCREEN_WIDTH * 0.1
  },
  textAdidasContainer: {
    alignItems: 'center',
    height: SCREEN_HEIGHT / 14,
    justifyContent: 'center',
    textAlign: 'center'
  },
  textAdidas: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(226,84,87)',
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: SCREEN_HEIGHT * 0.35,
    width: SCREEN_HEIGHT * 0.35,
    flex: 1,
    paddingBottom: 5,
    position: 'absolute'
  }

});

export default PictureSpecificItem;
