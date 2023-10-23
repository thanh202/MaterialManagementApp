import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Toolbar from '../components/Toolbar';
import {icons} from '../assets/icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {sizes} from '../utils/constants';
import InputCustom from '../components/InputCustom';
import {colors} from '../assets/colors';
import ButtonAuth from '../components/ButtonAuth';

const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const user = route?.params.user;

  console.log(user);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={handleGoBack}
          style={{padding: sizes.defaultPadding}}>
          <Text className="text-base text-black">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: sizes.defaultPadding}}>
          <Text className="text-base text-black font-bold">Done</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{uri: user?.avatar}}
        className="rounded-full"
        style={{
          width: sizes.widthScreen / 4,
          height: sizes.widthScreen / 4,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text className="self-center text-base text-black">Set new photo</Text>
      <TextInput
        placeholder="First name"
        className="rounded-md text-base text-black"
        style={styles.baseInput}
      />
      <TextInput
        placeholder="Last name"
        style={styles.baseInput}
        className="rounded-md text-base text-black"
      />
      <Text
        style={{marginHorizontal: sizes.defaultMargin}}
        className="text-black">
        Enter your name and add an optional profile photo
      </Text>
      <ButtonAuth
        title={'Log out'}
        styleButton={[styles.baseInput, styles.buttonLogout]}
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  baseInput: {
    backgroundColor: colors.gray_D9,
    padding: sizes.defaultPadding * 1.5,
    marginHorizontal: sizes.defaultMargin,
    marginTop: sizes.defaultMargin,
  },
  buttonLogout: {
    marginTop: sizes.defaultMargin * 2,
  },
});
