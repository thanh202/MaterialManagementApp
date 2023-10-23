import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sizes} from '../utils/constants';
import {colors} from '../assets/colors';

const InputCustom = ({
  label,
  placeholder,
  onChangeText,
  value,
  iconLeft,
  isShowText,
  inputMode,
  iconShowPassword,
  iconHidePassword,
  styleInputContainer,
  styleInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[{marginTop: sizes.defaultMargin * 1.5}, styleInputContainer]}>
      <Text className="text-black text-base font-medium">{label}</Text>
      <View
        className="flex-row items-center border rounded-md"
        style={{
          marginTop: sizes.defaultMargin * 0.4,
          borderColor: isFocused ? colors.blue : colors.dark,
          paddingHorizontal: sizes.defaultPadding * 0.8,
        }}>
        {iconLeft && (
          <Image
            source={iconLeft}
            style={{marginEnd: sizes.defaultMargin * 0.4}}
          />
        )}
        <TextInput
          style={[styleInput]}
          placeholder={placeholder}
          className="flex-1 text-base text-black "
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isShowText && !showPassword}
          inputMode={inputMode}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={showPassword ? iconHidePassword : iconShowPassword}
            size={24}
            color={colors.gray_D9}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputCustom;
