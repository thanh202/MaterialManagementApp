import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SelectQuantity({quantity, plusPress, minusPress}) {
  return (
    <View className="flex-row items-center">
      <TouchableOpacity
        className="w-6 h-6 border justify-center items-center rounded-md "
        onPress={minusPress}>
        <Text className=" text-black">-</Text>
      </TouchableOpacity>
      <Text className="text-base text-black mx-2">{quantity}</Text>
      <TouchableOpacity
        onPress={plusPress}
        className="w-6 h-6 border justify-center items-center rounded-md ">
        <Text className=" text-black">+</Text>
      </TouchableOpacity>
    </View>
  );
}
