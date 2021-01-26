import React, { useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator, Animated, TouchableOpacity } from 'react-native';

interface OneShowCircle {
  index: number,
  imageSource: string
}
const OneCircleItem = ({ index, imageSource }: OneShowCircle) => {
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
    <View key={index} style={styles.body}>
      <TouchableOpacity disabled={loading} style={styles.imageContainer}>
        <Image
          onLoadEnd={() => {
            fadeOutAction();
          }}
          resizeMode="contain"
          style={styles.image}
          source={{ uri: imageSource, cache: 'force-cache' }}
        />
        <Animated.View style={[styles.imageContainer, { position: 'absolute', opacity: fadeOut }]}><ActivityIndicator size="small" color="#000" /></Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'rgb(231,232,233)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 50,
    width: 50
  }
});


export default OneCircleItem;
