import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
export const Product = ({item}) => {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate('product-detail-screen', {item});
  };
  const source = {uri: item.avatar};
  return (
    <TouchableOpacity
      onPress={goDetail}
      activeOpacity={0.7}
      style={style.container}>
      <Image style={style.image} source={source} />
      <View style={style.content}>
        <Text style={style.title}>{item.name}</Text>
        <Text style={style.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
