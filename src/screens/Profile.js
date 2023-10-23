import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardProfile from '../components/CardProfile';
import ButtonOption from '../components/ButtonOption';
import {icons} from '../assets/icons';
import {sizes} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get('https://651f71f744a3a8aa4769abdc.mockapi.io//users/3')
      .then(response => {
        setUser(response.data);
        console.log('user: ', response.data);
      })
      .catch(err => {
        console.error('error: ', err);
      });
  }, []);

  const nextScreen = (nameScreen, item) => {
    navigation.navigate(nameScreen, item);
  };

  return (
    <View>
      <CardProfile
        data={user}
        onClick={() => nextScreen('editProfile', {user})}
      />

      <Text style={[styles.baseTextTitle, {marginTop: 0}]}>History</Text>
      <ButtonOption
        title={'Transaction history'}
        iconLeft={icons.history}
        iconRight={icons.Forward}
      />
      <Text style={[styles.baseTextTitle]}>Statistical</Text>
      <ButtonOption
        title={'Detailed statistics'}
        iconLeft={icons.statistics}
        iconRight={icons.Forward}
      />
      <Text style={[styles.baseTextTitle]}>Setting</Text>
      <ButtonOption
        title={'Notifications and Sounds'}
        iconLeft={icons.notification}
        iconRight={icons.Forward}
      />
      <ButtonOption
        title={'Language'}
        iconLeft={icons.Language}
        iconRight={icons.Forward}
      />
      <ButtonOption
        title={'Privacy and Security'}
        iconLeft={icons.lock}
        iconRight={icons.Forward}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  baseTextTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: sizes.defaultMargin * 2.5,
    marginHorizontal: sizes.defaultMargin,
  },
});
