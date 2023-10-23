import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const sizes = {
  widthScreen: width,
  heightScreen: height,
  defaultPadding: width / 40,
  defaultMargin: width / 40,
};
