import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ButtonAuth = ({
  title,
  styleButton,
  styleText,
  onPress,
  icon,
  colorGradient = [],
  styleIcon,
}) => {
  return (
    <View>
      {colorGradient.length > 0 ? (
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            colors={colorGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styleButton}
            className="flex-1 w-full h-full justify-center items-center rounded-md flex-row">
            {icon && <Image source={icon} />}
            <Text
              className="font-semibold text-base text-black"
              style={styleText}>
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={styleButton}
          className=" flex-row justify-center items-center rounded-md">
          {icon && <Image source={icon} style={styleIcon} />}
          <Text
            className="font-semibold text-base text-black"
            style={styleText}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({});
