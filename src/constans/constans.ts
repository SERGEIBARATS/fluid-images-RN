import { Dimensions, Platform } from 'react-native';


export const IS_IOS = () => Platform.OS === 'ios';
export const IS_IPHONE_X = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (Dimensions.get('window').height === 812 || Dimensions.get('window').width === 812);
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const TAB_BAR_MAX_HEIGHT = 40;
export const BLACK = '#000000';
export const WHITE = '#ffffff';
export const RED_CURRENT_CURRENCY = 'rgb(219,81,73)';
export const BASIC_SHADOW_STYLES = {
  shadowColor: BLACK,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 2,
  backgroundColor: WHITE
};
export const BASIC_TEXT_STYLES = {
  backgroundColor: 'transparent',
  fontSize: 15,
  color: '#545454',
  fontFamily: 'fontAwesome'
};
export const HEADER_HEIGHT = 70;

export const SIZE_SHOE = [
  { size: 5.5 },
  { size: 6 },
  { size: 6.5 },
  { size: 7 },
  { size: 7.5 },
  { size: 8 },
  { size: 8.5 },
  { size: 9 },
  { size: 9.5 },
  { size: 10 },
];

export const QUANTITY = [
  { quantityNum: 1 },
  { quantityNum: 2 },
  { quantityNum: 3 },
  { quantityNum: 4 },
  { quantityNum: 5 },
  { quantityNum: 6 },
  { quantityNum: 7 },
  { quantityNum: 8 },
  { quantityNum: 9 },
  { quantityNum: 10 }
];

export interface shoe {
  imageSource: string,
  size: string,
  price: string,
  quantity: string
}
