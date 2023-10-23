import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Toolbar from '../components/Toolbar';
import {icons} from '../assets/icons';
import {sizes} from '../utils/constants';
import BottomButton from '../components/BottomButton';
import {useNavigation} from '@react-navigation/native';

export default function TermsAndCondition() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Toolbar
        iconLeft={icons.Left_Arrow}
        title={'Terms and condition '}
        iconRight={icons.More}
        onBackPress={handleGoBack}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: sizes.defaultMargin}}>
        <Text
          style={[
            styles.textBase,
            {
              paddingHorizontal: sizes.defaultPadding * 2.4,
              color: 'black',
              marginTop: sizes.heightScreen / 150,
            },
          ]}>
          Update: September 8, 2023
        </Text>
        <Text
          style={[
            styles.textBase,
            {
              paddingHorizontal: sizes.defaultPadding * 2.4,
              color: 'black',
              marginTop: sizes.heightScreen / 150,
            },
          ]}>
          Welcome to Materials Management
        </Text>
        <View
          style={{
            paddingHorizontal: sizes.defaultPadding * 3,
            marginTop: sizes.heightScreen / 50,
          }}>
          <Text style={[styles.textBase]}>
            1.{' '}
            <Text>
              Acceptance of Terms and Conditions: By accessing or using the
              Materials Management Application, you agree to comply with all the
              terms and conditions outlined in this document. If you do not
              agree with any part of these terms and conditions, you are not
              permitted to use the application
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            2.{' '}
            <Text>
              Data and Security: We are committed to safeguarding your
              information. However, we are not responsible for any loss or
              leakage of information due to user violations or third-party
              intrusions.
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            3.{' '}
            <Text>
              Legal Use: You commit to using our Materials Management
              Application for lawful purposes and not to violate any legal
              regulations in your area of use.
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            4.{' '}
            <Text>
              Copyright and Intellectual Property: All content, images, and
              materials within this application are the intellectual property of
              ours or third parties. You are not allowed to copy, modify, or
              distribute this content without permission from us.
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            5.{' '}
            <Text>
              Update Versions: We may update this application to improve
              features or fix errors. You should always install the latest
              version for the best experience.
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            6.{' '}
            <Text>
              Termination of Use: We reserve the right to terminate your usage
              rights for this application if you violate the terms and
              conditions in this document.
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            7.{' '}
            <Text>
              Warranty: The application is provided "as is," and we do not
              guarantee stability or suitability for specific purposes.
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            8.{' '}
            <Text>
              Contact: If you have any questions or complaints, please contact
              us at [email address or contact phone number].
            </Text>
          </Text>
          <Text style={[styles.textBase]}>
            9.{' '}
            <Text>
              Changes to Terms: We may change these terms and conditions without
              prior notice. Continuing to use the application after such changes
              implies your acceptance of those changes.
            </Text>
          </Text>
        </View>
      </ScrollView>
      <BottomButton
        styleButtonLeft={{width: '50%'}}
        styleButtonRightContainer={{width: '50%'}}
        titleLeft={'Previous'}
        onClickLeft={handleGoBack}
        titleRight={'Continue'}
        onClickRight={() => {
          navigation.navigate('profileCustomer');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textBase: {
    fontSize: 14,
  },
});
