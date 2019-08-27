import React from 'react';
import { View } from 'react-native';
import PictureSpecificItem from './containerSpecificItem/pictureSpecificItem';
import HorizontalListCircle from './horizontalCircleList/HorizontalListCircle';
import ActionSpecificComponent from './containerSpecificItem/actionSpecific';


const SpecificItem = ({ navigation }: any) => {
  const itemId = navigation.getParam('index');
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <PictureSpecificItem navigation={navigation}  />
      <HorizontalListCircle />
      <ActionSpecificComponent indexSelected={itemId} />
    </View>
  );
};


export default SpecificItem;
