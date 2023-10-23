import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {images} from '../assets/images';
import {sizes} from '../utils/constants';
import {icons} from '../assets/icons';
import {colors} from '../assets/colors';
import SlideShow from '../components/SlideShow';
import {useDispatch, useSelector} from 'react-redux';
import ItemProduct from '../components/ItemProduct';
import {fetchProductRequest} from '../redux/actions/productAction';
import ItemCategory from '../components/ItemCategory';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const loading = useSelector(state => state.productReducer.loading);
  const error = useSelector(state => state.productReducer.error);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <ScrollView className="flex-1">
      {/* top */}
      <View
        className="flex-row justify-between items-center"
        style={{
          marginHorizontal: sizes.defaultMargin * 2.4,
          marginTop: sizes.heightScreen / 50,
        }}>
        <Image source={images.logo} style={[styles.baseImage]} />
        <Text className="text-lg font-bold text-black">Home</Text>
        <Image
          style={[styles.baseImage]}
          className="rounded-full"
          source={{
            uri: 'https://static.printler.com/cache/1/f/c/7/2/8/1fc7280e4991deb9ba5e946a7fc0e5e151174f58.jpg',
          }}
        />
      </View>
      {/* search */}
      <View
        className="flex-row items-center rounded-3xl"
        style={{
          backgroundColor: colors.gray_D9,
          marginHorizontal: sizes.defaultMargin * 2.4,
          marginTop: sizes.heightScreen / 50,
          paddingHorizontal: sizes.defaultPadding,
        }}>
        <Image source={icons.Search} />
        <TextInput
          placeholder="What are you looking for?"
          className="flex-1 text-base text-black ml-1"
          cursorColor={colors.dark}
        />
      </View>
      {/* banner */}
      <SlideShow data={products.slice(0, 5)} />

      {/* category */}
      <Text
        className="text-base font-bold text-black"
        style={{marginHorizontal: sizes.defaultMargin}}>
        Categories
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{margin: sizes.defaultMargin}}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return <ItemCategory item={item} />;
        }}
      />

      {/* grid view */}
      <Text
        className="text-base font-bold text-black"
        style={{marginHorizontal: sizes.defaultMargin}}>
        Products
      </Text>
      <FlatList
        style={{
          paddingHorizontal: sizes.defaultPadding,
          marginBottom: sizes.heightScreen / 50,
        }}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        data={products}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <ItemProduct
              item={item}
              styleContainer={styles.itemProductContainer}
              styleImage={styles.ImageProduct}
              icon={images.cart}
              styleIcon={styles.iconProduct}
              stylePrice={[styles.textBase, {fontWeight: '700'}]}
              styleTile={[styles.textBase, {}]}
              onPressed={() => {
                navigation.navigate('detailProduct', {item});
              }}
            />
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  baseImage: {
    width: sizes.widthScreen / 11,
    height: sizes.widthScreen / 11,
  },
  itemProductContainer: {
    flex: 1,
    marginHorizontal: sizes.defaultMargin * 0.5,
    marginTop: sizes.heightScreen / 60,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  ImageProduct: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: sizes.defaultMargin * 1.3,
    borderRadius: 10,
  },
  textBase: {
    fontSize: 16,
    color: 'black',
  },
  iconProduct: {
    marginEnd: sizes.defaultMargin,
  },
  userAvatar: {
    width: sizes.widthScreen / 9,
    height: sizes.widthScreen / 9,
    resizeMode: 'contain',
    borderRadius: 8,
  },
});
