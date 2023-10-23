import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {sizes} from '../utils/constants';
import {colors} from '../assets/colors';

export default function ButtonOption({title, iconLeft, iconRight, onClick}) {
  return (
    <TouchableOpacity
      onPress={onClick}
      className="flex-row  rounded-lg"
      style={{
        marginTop: sizes.defaultMargin,
        marginHorizontal: sizes.defaultMargin,
        padding: sizes.defaultPadding * 1.5,
        backgroundColor: colors.gray_D9,
      }}>
      {iconLeft && <Image source={iconLeft} />}
      <Text
        className="flex-1 text-black text-base"
        style={{marginHorizontal: sizes.defaultMargin}}>
        {title}
      </Text>
      {iconRight && <Image source={iconRight} />}
    </TouchableOpacity>
  );
}
