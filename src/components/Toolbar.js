import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {sizes} from '../utils/constants';

const Toolbar = ({onBackPress, iconLeft, iconRight, title, onMorePress}) => {
  return (
    <View
      className="flex-row bg-white justify-between items-center "
      style={{padding: sizes.defaultPadding}}>
      {iconLeft && (
        <TouchableOpacity onPress={onBackPress}>
          <Image source={iconLeft} />
        </TouchableOpacity>
      )}
      <Text className="text-lg font-bold text-black"> {title} </Text>
      {iconRight && (
        <TouchableOpacity onPress={onMorePress}>
          <Image source={iconRight} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Toolbar;
