import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import style from './style';
import {useRoute} from '@react-navigation/native';
export const ProductDetailScreen = () => {
  const route = useRoute();
  const {item} = route.params;
  const source = {uri: item.avatar};
  return (
    <View style={style.container}>
      <Image style={style.image} source={source} />
      <View style={style.content}>
        <View style={style.row}>
          <Text style={style.title}>{item.name}</Text>
          <Text style={style.price}>${item.price}</Text>
        </View>
        <ScrollView>
          <Text style={style.description}>{item.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
