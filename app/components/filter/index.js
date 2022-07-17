import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

export const Filter = ({item, selected, setSelected}) => {
  const selectedStyle = selected.id === item?.id ? 'selected' : 'non_selected';
  const select = () => {
    setSelected(item);
  };
  return (
    <TouchableOpacity onPress={select} style={style.container[selectedStyle]}>
      <Text style={style.title[selectedStyle]}>{item?.name}</Text>
    </TouchableOpacity>
  );
};
