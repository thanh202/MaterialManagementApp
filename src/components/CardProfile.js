import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../assets/icons';
import {sizes} from '../utils/constants';

export default function CardProfile({data, onClick}) {
  console.log('data user: ', data);
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      style={{margin: sizes.defaultMargin * 2.4}}>
      {data ? (
        <View className="flex-row">
          <Image
            source={{uri: data.avatar}}
            className="rounded-full"
            style={[styles.baseImage]}
          />
          <View
            className="justify-around"
            style={{margin: sizes.defaultMargin * 1.5}}>
            <Text className="text-base text-black"> {data.name} </Text>
            <View className={`flex-row`}>
              <Text
                style={{backgroundColor: 'rgba(217, 217, 217, 1)'}}
                className="text-base text-black  px-3 my-1 rounded-3xl">
                {' '}
                {data.role}{' '}
              </Text>
            </View>
            <Text className="text-base text-black"> {data.email} </Text>
          </View>
        </View>
      ) : (
        <View className="flex-row">
          <View
            className="rounded-full bg-gray-300 justify-center items-center"
            style={[styles.baseImage]}>
            <Image source={icons.person} />
          </View>
          <View
            className="justify-around"
            style={{margin: sizes.defaultMargin * 1.5}}>
            <Text className="text-base text-black"> name </Text>
            <View className={`flex-row`}>
              <Text
                className="text-base text-black px-3 my-1 rounded-3xl"
                style={{backgroundColor: 'rgba(217, 217, 217, 1)'}}>
                {' '}
                role{' '}
              </Text>
            </View>
            <Text className="text-base text-black"> email </Text>
          </View>
        </View>
      )}
      <Text className="text-base text-black absolute top-0 right-3">Edit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseImage: {
    width: sizes.widthScreen / 4,
    height: sizes.widthScreen / 4,
    resizeMode: 'contain',
  },
});
