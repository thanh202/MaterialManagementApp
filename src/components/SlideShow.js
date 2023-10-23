import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {sizes} from './../utils/constants';
import PagerView from 'react-native-pager-view';

const SlideShow = ({data}) => {
  const pageRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextPage = (currentPage + 1) % data.length;
      pageRef.current.setPage(nextPage);
      setCurrentPage(nextPage);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentPage]);

  return (
    <View
      style={{
        margin: sizes.defaultMargin,
        marginTop: sizes.heightScreen / 50,
      }}>
      <PagerView
        orientation={'horizontal'}
        scrollEnabled
        ref={pageRef}
        onPageSelected={e => {
          setCurrentPage(e.nativeEvent.position);
        }}
        className="w-full h-[200px]">
        {data.map((item, index) => {
          return (
            <View
              key={item.id}
              className="flex flex-row border rounded-2xl"
              style={{padding: sizes.defaultPadding / 2}}>
              <View
                className="justify-around items-center"
                style={{
                  width: sizes.widthScreen / 1.5,
                }}>
                <Text
                  className="text-base text-black"
                  style={{padding: sizes.defaultPadding / 1.5}}>
                  {item.title}
                </Text>
                <TouchableOpacity
                  className="border rounded-2xl"
                  style={{padding: sizes.defaultPadding / 1.5}}>
                  <Text className="text-base text-black">Buy now</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: sizes.defaultMargin,
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    resizeMode: 'contain',
                    width: sizes.widthScreen / 4,
                    aspectRatio: 1,
                  }}
                />
              </View>
            </View>
          );
        })}
      </PagerView>
      <View
        className="flex-row justify-center items-center"
        style={{marginTop: sizes.heightScreen / 50}}>
        {data.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 mx-0.5 rounded-full ${
              currentPage === index ? 'bg-yellow-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default SlideShow;

const styles = StyleSheet.create({});
