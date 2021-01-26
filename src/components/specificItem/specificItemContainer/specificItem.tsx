import React from 'react';
import { ScrollView } from 'react-native';
import PictureSpecificItem from './containerSpecificItem/pictureSpecificItem';
import HorizontalListCircle from './horizontalCircleList/HorizontalListCircle';
import ActionSpecificComponent from './containerSpecificItem/actionSpecific';


const SpecificItem = ({ navigation }: any) => {
  const itemId = navigation.getParam('index');
  return (
    <ScrollView style={{ flex: 1}}>
      <PictureSpecificItem navigation={navigation}  />
      <HorizontalListCircle />
      <ActionSpecificComponent indexSelected={itemId} />
    </ScrollView>
  );
};


export default SpecificItem;
