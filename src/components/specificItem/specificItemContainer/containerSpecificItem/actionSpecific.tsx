import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialEntypo from 'react-native-vector-icons/Entypo';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { QUANTITY, SIZE_SHOE, SCREEN_WIDTH } from '../../../../constans/constans';
import SizeListHorizontal from './SizeListHorizontal';
import QuantityListHorizontal from './QuantityListHorizontal';
import { addItemToCart, addTotalPrice } from '../../../../actions';
import { addItemToFavorite, deleteItemToFavorite } from '../../../../actions/favoritesActions';


interface InterfaceSize {
    size: string,
    clicked: boolean
}
interface InterfaceQuantity {
    quantityNum: string
}
const ActionSpecific = ({ selectedItem, favorite, addItemToCart, addTotalPrice, addItemToFavorite, deleteItemToFavorite }: any) => {
  const [sizeSelected, setSizeSelected] = useState('-1');
  const [quantitySelected, setQuantitySelected] = useState('-1');
  const [sizeOfSelected, setOfSizeSelected] = useState('-1');
  const [quantityOfSelected, setQuantityOfSelected] = useState('-1');
  const [isFavorite, setIsFavorite] = useState(false);
  const { price, description, imageSource } = selectedItem;


  const clickedSize = (id: string, size: string) => {
    setSizeSelected(id);
    setOfSizeSelected(size);
  };
  const clickedQuantity = (id: string, quantity: string) => {
    setQuantitySelected(id);
    setQuantityOfSelected(quantity);
  };


  const renderSize = () => {
    return SIZE_SHOE.map(({ size }: InterfaceSize, index: number) => {
      return (
        <SizeListHorizontal
          key={index}
          size={size}
          keyBackColor="rgb(226,84,87)"
          keyTextColor="white"
          keyMinHeight={32}
          keyMinWidth={32}
          index={index}
          clickedSize={clickedSize}
          sizeSelected={sizeSelected}
        />
      );
    });
  };

  const renderQuantity = () => {
    return QUANTITY.map(({ quantityNum }: InterfaceQuantity, index: number) => {
      return (
        <QuantityListHorizontal
          key={index}
          quantity={quantityNum}
          keyBackColor="rgb(226,84,87)"
          keyTextColor="white"
          keyMinHeight={25}
          keyMinWidth={25}
          index={index}
          clickedQuantity={clickedQuantity}
          quantitySelected={quantitySelected}
        />
      );
    });
  };

  const addToCart = () => {
    addItemToCart(sizeOfSelected, price, quantityOfSelected, imageSource, description);
    const priceForSelected = Number(price) * Number(quantityOfSelected);

    addTotalPrice(priceForSelected);
  };

  const clickedFavorite = () => {
    if (!isFavorite) addItemToFavorite(sizeOfSelected, price, quantityOfSelected, imageSource, description);
    else deleteItemToFavorite(favorite, );
    setIsFavorite(!isFavorite);
  };

  const renderFavorite = () => {
    if (isFavorite) {
      return (
        <TouchableOpacity onPress={() => clickedFavorite()}>
          <MaterialAntDesign name="heart" size={20} color="red" />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => clickedFavorite()}>
        <MaterialAntDesign name="hearto" size={20} />
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.body}>
      <View style={styles.textAdidasContainer}>
        <Text style={styles.textAdidas}>Adidas</Text>
        <Text style={styles.textPrice}>
$
          {price}
        </Text>
      </View>
      <View>
        <Text style={styles.textDescriptionModel}>{description}</Text>
        <Text style={styles.textDescriptionColor}>Black/Core Black-Core Black</Text>
        <Text style={styles.textSize}>SIZE</Text>
        <View style={styles.containerRender}>
          {renderSize()}
        </View>
        <Text style={styles.quantityText}>QUANTITY</Text>
        <View style={styles.containerRender}>
          {renderQuantity()}
        </View>
        <View style={styles.borderContainer}>
          <TouchableOpacity>
            <MaterialEntypo name="share" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAddContainer}
            onPress={() => addToCart()}
          >
            <Text style={styles.buttonAdd}>Add to cart</Text>
          </TouchableOpacity>
          { renderFavorite() }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20
  },
  textAdidas: {
    fontWeight: '500',
    fontSize: 23
  },
  textPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgb(226,84,87)'
  },
  textAdidasContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textDescriptionModel: {
    color: 'rgb(226,84,87)',
    paddingTop: 5
  },
  textDescriptionColor: {
    fontSize: 11,
    paddingTop: 6
  },
  textSize: {
    fontWeight: '500',
    paddingTop: 15
  },
  containerRender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8 },
  quantityText: {
    fontWeight: '500',
    paddingTop: 5
  },
  borderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15,
    paddingHorizontal: SCREEN_WIDTH / 6,
    marginTop: 30
  },
  buttonAddContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: (SCREEN_WIDTH / 6) * 2,
    height: 40,
    backgroundColor: 'rgb(226,84,87)',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonAdd: {
    color: 'white',
    fontWeight: '500'
  }


});

const mapStateToProps = (state: any) => {
  const { shop: { selectedItem }, favorite: { favorite } } = state;
  return { selectedItem, favorite };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    addItemToCart, addTotalPrice, addItemToFavorite, deleteItemToFavorite
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionSpecific);
