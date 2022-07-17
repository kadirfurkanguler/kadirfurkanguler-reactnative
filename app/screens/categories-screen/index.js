import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import style from './style';
import {Filter, Product} from '../../components';
import strings from '../../utils/strings';
export const CategoriesScreen = () => {
  const all = {id: 0, name: strings.all};
  const dummyData = [
    {createdAt: '2022-04-14T18:27:19.838Z', name: 'Electronic', id: '1'},
    {createdAt: '2022-04-14T18:27:19.838Z', name: 'Furnitures', id: '2'},
    {createdAt: '2022-04-14T18:27:19.838Z', name: 'Clothing', id: '3'},
    {createdAt: '2022-04-14T18:27:19.838Z', name: 'Accessories', id: '4'},
  ];
  const data = [all, ...dummyData];

  const [selected, setSelected] = useState(data[0]);
  const renderItem = ({item}) => {
    return <Filter item={item} selected={selected} setSelected={setSelected} />;
  };
  const renderProduct = ({item}) => {
    return <Product item={item} />;
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>{strings.app_name}</Text>
      <ScrollView style={{height: 50}} horizontal>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
