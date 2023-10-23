import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import {images} from '../assets/images';
import {sizes} from '../utils/constants';
import InputCustom from '../components/InputCustom';
import {icons} from '../assets/icons';
import {colors} from '../assets/colors';
import ButtonAuth from '../components/ButtonAuth';

export default function Login() {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleEmail = text => {
    console.log(text);
  };

  const handlePassword = text => {
    console.log(text);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* header */}
      <View className="items-center">
        <Image
          source={images.logo}
          style={{marginTop: sizes.heightScreen / 10}}
        />
        <Text
          className="text-[18px] font-bold text-black"
          style={{marginTop: sizes.heightScreen / 30}}>
          Login to
        </Text>
        <Text className=" text-[20px] font-bold text-black">
          Materials Management
        </Text>
        <Text
          className=" text-base font-normal text-black"
          style={{marginTop: sizes.heightScreen / 100}}>
          We are happy to see you back again!
        </Text>
      </View>
      {/* body */}
      <View>
        <InputCustom
          label={'Email'}
          iconLeft={icons.email}
          placeholder={'example@gmail.com'}
          onChangeText={text => {
            handleEmail(text);
          }}
        />
        <InputCustom
          label={'Password'}
          iconLeft={icons.email}
          placeholder={'******'}
          isShowText={true}
          iconShowPassword={'eye'}
          iconHidePassword={'eye-slash'}
          onChangeText={text => {
            handlePassword(text);
          }}
        />
        <View
          className="flex-row items-center"
          style={{marginTop: sizes.heightScreen / 100}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={colors.blue}
          />
          <Text className="text-base text-black font-medium">Remember me?</Text>
        </View>
        <ButtonAuth
          title={'Login'}
          styleButton={[styles.btnLogin, styles.shadow]}
          colorGradient={[colors.blue, colors.purple]}
          styleText={styles.textLogin}
          onPress={() => {
            navigation.navigate('bottomTab');
          }}
        />
        <View
          className="flex-row flex-1 items-center"
          style={{marginTop: sizes.heightScreen / 9}}>
          <View className="h-[1px] bg-black flex-1" />
          <Text
            className="text-base font-normal text-black"
            style={{marginHorizontal: sizes.defaultMargin * 0.8}}>
            Or login with
          </Text>
          <View className="h-[1px] bg-black  flex-1" />
        </View>
        <ButtonAuth
          title={'Login with Google'}
          styleButton={styles.loginWithGoogle}
          icon={icons.google}
          styleIcon={styles.iconGoogle}
          onPress={() => {
            console.log('press google');
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.defaultPadding * 2,
  },
  btnLogin: {
    marginTop: sizes.heightScreen / 50,
    padding: sizes.defaultMargin,
  },
  shadow: {
    shadowColor: colors.gray_D9,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  textLogin: {
    color: 'white',
  },
  loginWithGoogle: {
    backgroundColor: colors.buttonGG,
    padding: sizes.defaultPadding,
    marginTop: sizes.heightScreen / 50,
  },
  iconGoogle: {
    marginRight: sizes.defaultMargin,
  },
});
