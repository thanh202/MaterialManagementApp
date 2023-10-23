import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {sizes} from '../utils/constants';

export default function ItemCategory({item, onPressed}) {
  return (
    <Pressable onPress={onPressed}>
      <Image
        source={{uri: item.image}}
        className="rounded-full"
        style={{
          width: sizes.widthScreen / 6.5,
          height: sizes.widthScreen / 6.5,
          marginRight: sizes.defaultMargin,
          resizeMode: 'contain',
        }}
      />
    </Pressable>
  );
}
