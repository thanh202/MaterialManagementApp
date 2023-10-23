import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../components/Toolbar';
import {icons} from '../assets/icons';
import BottomButton from '../components/BottomButton';
import InputCustom from '../components/InputCustom';
import {sizes} from '../utils/constants';

const ProfileCustomer = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-1">
      <Toolbar
        iconLeft={icons.Left_Arrow}
        title={'Profile Customer'}
        iconRight={icons.More}
        onBackPress={handleGoBack}
      />
      <ScrollView className="flex-1">
        <InputCustom
          iconLeft={icons.email}
          label={'Email'}
          placeholder={'example@gmail.com'}
          styleInputContainer={styles.baseInput}
        />
        <InputCustom
          iconLeft={icons.Name}
          label={'Name'}
          placeholder={'John'}
          styleInputContainer={styles.baseInput}
        />
        <InputCustom
          iconLeft={icons.Phone}
          label={'Phone'}
          placeholder={'0123456789'}
          styleInputContainer={styles.baseInput}
        />
        <InputCustom
          iconLeft={icons.Address}
          label={'Address'}
          placeholder={'Ha Noi, Viet Nam'}
          styleInputContainer={styles.baseInput}
        />
      </ScrollView>
      <BottomButton
        styleButtonLeft={{width: '50%'}}
        styleButtonRightContainer={{width: '50%'}}
        titleLeft={'Previous'}
        onClickLeft={handleGoBack}
        titleRight={'Continue'}
        onClickRight={() => {}}
      />
    </View>
  );
};

export default ProfileCustomer;

const styles = StyleSheet.create({
  baseInput: {
    marginHorizontal: sizes.defaultMargin * 2.5,
  },
});
