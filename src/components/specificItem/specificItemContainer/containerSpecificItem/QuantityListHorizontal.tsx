import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface SizeInterface {
    key: number,
    keyTextColor: string,
    keyBackColor: string,
    backGroundColor: string,
    size: string,
    keyMinWidth: number,
    keyMinHeight: number,
    keyActionQuantity: any,
    index: number,
    quantitySelected: number,
    clickedQuantity: string,
    quantity: any
}

const QuantityListHorizontal = ({ key, quantity, keyBackColor, keyTextColor, keyMinWidth, keyMinHeight, index, clickedQuantity, quantitySelected }:SizeInterface) => {
  if (quantitySelected == index) {
    return (
      <TouchableOpacity
        key={key}
        style={[styles.circleSizeStyle, {
          backgroundColor: keyBackColor,
          minWidth: keyMinWidth,
          minHeight: keyMinHeight
        }]}
        onPress={() => { clickedQuantity(index,quantity); }}
      >
        <Text style={[styles.textStyle, { color: keyTextColor }]}>
          {quantity}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      key={key}
      style={[styles.circleSizeStyle, {
        backgroundColor: 'white',
        minWidth: keyMinWidth,
        minHeight: keyMinHeight
      }]}
      onPress={() => { clickedQuantity(index,quantity); }}
    >
      <Text style={[styles.textStyle, { color: 'black' }]}>
        {quantity}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  circleSizeStyle: {
    borderRadius: 17,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 17,
    margin: 2
  }
});


export default QuantityListHorizontal;
