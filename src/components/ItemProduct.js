import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function ItemProduct({
  item,
  onPressed,
  styleButton,
  styleContainer,
  styleTile,
  styleImage,
  stylePrice,
  icon,
  styleIcon,
}) {
  console.log('ItemProduct: ', item);
  return (
    <View style={styleContainer}>
      <TouchableOpacity style={styleButton} onPress={onPressed}>
        <View style={{padding: 5}}>
          <Image source={{uri: item.image}} style={styleImage} />
          <View style={{padding: 7}}>
            <Text style={styleTile}>
              {item.title.length > 10
                ? item.title.slice(0, 18) + '...'
                : item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={stylePrice}>$ {item.price}</Text>
              {icon && <Image source={icon} style={styleIcon} />}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
