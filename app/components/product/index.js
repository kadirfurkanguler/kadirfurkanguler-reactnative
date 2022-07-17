import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

export const Product = () => {
  const source = {uri: 'https://picsum.photos/200'};
  return (
    <View style={style.container}>
      <Image style={style.image} source={source} />
      <View style={style.content}>
        <Text style={style.title}>Product Title</Text>
        <Text style={style.price}>$300</Text>
      </View>
    </View>
  );
};
