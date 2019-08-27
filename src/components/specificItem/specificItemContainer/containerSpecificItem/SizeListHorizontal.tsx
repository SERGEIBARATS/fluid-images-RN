import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface SizeInterface {
    key: number,
    keyTextColor: string,
    keyBackColor: string,
    backGroundColor: string,
    size: string,
    keyMinWidth: number,
    keyMinHeight: number,
    keyAction: any,
    clicked: boolean,
    index: number,
    clickedSize: any,
    sizeSelected: number
}

const SizeListHorizontal = ({ key, size, keyBackColor, keyTextColor, keyMinWidth, keyMinHeight, index, clickedSize, sizeSelected }:SizeInterface) => {


  if (sizeSelected == index) {
    return (
      <TouchableOpacity
        key={key}
        style={[styles.circleSizeStyle, {
          backgroundColor: keyBackColor,
          minWidth: keyMinWidth,
          minHeight: keyMinHeight
        }]}
        onPress={() => { clickedSize(index,size); }}
      >
        <Text style={[styles.textStyle, { color: keyTextColor }]}>
          {size}
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
      onPress={() => { clickedSize(index, size); }}
    >
      <Text style={[styles.textStyle, { color: 'black' }]}>
        {size}
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


export default SizeListHorizontal;
