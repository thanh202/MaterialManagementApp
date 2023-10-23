import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toolbar from '../components/Toolbar';
import {icons} from '../assets/icons';
import {sizes} from '../utils/constants';
import SelectQuantity from '../components/SelectQuantity';
import {colors} from '../assets/colors';

import BottomButton from '../components/BottomButton';

export default function DetailProduct() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const route = useRoute();
  const {item} = route?.params;
  console.log('detail product: ', item);

  let size = [];

  for (let i = 39; i <= 43; i++) {
    size.push(i);
  }

  const handleSizePress = size => {
    setSelectedSize(size); // Cập nhật trạng thái khi ấn vào kích thước
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}} scrollEnabled>
        <Toolbar
          onBackPress={() => {
            navigation.goBack();
          }}
          iconLeft={icons.Left_Arrow}
          iconRight={icons.More}
          title={'Product detail'}
        />
        <View className="bg-white rounded-b-[50px]">
          <Image
            source={{uri: item.image}}
            style={{
              width: sizes.widthScreen,
              height: sizes.widthScreen,
              resizeMode: 'contain',
            }}
          />
        </View>
        {/* body */}
        <View style={{padding: sizes.defaultPadding}}>
          <Text className="text-black font-normal text-base">{item.title}</Text>
          <View
            style={{marginVertical: sizes.defaultMargin}}
            className="flex-row justify-between items-center">
            <Text className="font-bold text-base text-black">
              $ {item.price}
            </Text>
            {/* select quantity */}
            <SelectQuantity
              quantity={quantity}
              minusPress={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
              plusPress={() => {
                setQuantity(quantity + 1);
              }}
            />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: colors.dark,
            }}
          />
          <View
            style={{marginTop: sizes.defaultMargin}}
            className="flex-row justify-between items-center">
            <Text className="text-base text-black font-semibold">
              Select size
            </Text>
            <Text>Size chart</Text>
          </View>

          <FlatList
            style={{marginVertical: sizes.defaultMargin}}
            data={size}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleSizePress(item)}
                  className="rounded-3xl"
                  style={{
                    backgroundColor:
                      selectedSize === item ? 'black' : colors.gray_D9,
                    padding: sizes.defaultPadding * 0.7,
                    paddingHorizontal: sizes.defaultPadding * 2.8,
                    marginRight: sizes.defaultMargin,
                  }}>
                  <Text
                    className="font-bold text-base text-black"
                    style={{
                      color: selectedSize === item ? 'white' : 'black',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <Text className=" text-black font-bold text-[16px]">
            Category: <Text className="font-normal">{item.category}</Text>
          </Text>
          <Text className=" text-black font-bold text-[16px] mt-1">
            Description:
          </Text>
          <Text className=" text-black text-[16px] mt-1">
            {item.description}
          </Text>
        </View>
      </ScrollView>
      <BottomButton
        iconLeft={icons.cart}
        titleRight={'Order now'}
        onClickLeft={() => {
          console.log('cart');
        }}
        onClickRight={() => {
          navigation.navigate('termsAndConditions');
        }}
      />
    </View>
  );
}
