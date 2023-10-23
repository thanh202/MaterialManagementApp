import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {sizes} from '../utils/constants';
import {colors} from '../assets/colors';
import {icons} from '../assets/icons';

export default function BottomButton({
  titleLeft,
  titleRight,
  iconLeft,
  onClickLeft,
  onClickRight,
  styleTitleLeft,
  styleTitleRight,
  styleButtonLeft,
  styleButtonRight,
  styleButtonRightContainer,
}) {
  return (
    <View className="flex-row">
      <TouchableOpacity
        onPress={onClickLeft}
        className="bg-white justify-center items-center"
        style={[
          {
            padding: sizes.defaultPadding,
            paddingHorizontal: sizes.defaultPadding * 2,
            width: '30%',
          },
          styleButtonLeft,
        ]}>
        {iconLeft && <Image source={iconLeft} />}
        {titleLeft && (
          <Text className="text-base text-black" style={[styleTitleLeft]}>
            {titleLeft}
          </Text>
        )}
      </TouchableOpacity>
      <LinearGradient
        colors={[colors.blue, colors.purple]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={[{width: '70%'}, styleButtonRightContainer]}>
        <TouchableOpacity
          onPress={onClickRight}
          className="justify-center items-center"
          style={[{padding: sizes.defaultPadding * 1.2}, styleButtonRight]}>
          <Text
            className="text-lg text-white font-semibold"
            style={[styleTitleRight]}>
            {titleRight}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
