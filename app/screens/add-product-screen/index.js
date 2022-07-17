import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button, TextInput} from 'react-native-paper';
import strings from '../../utils/strings';
import {addProduct} from '../../api';
import style from './style';
import {Filter} from '../../components';
import {useNavigation} from '@react-navigation/native';
import colors from '../../utils/colors';
import {reset} from '../../redux/slice/products-slice';
export const AddProductScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {data} = useSelector(state => state.categories);
  const {add_response, isLoading} = useSelector(state => state.products);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selected, setSelected] = useState(data[0]);
  const add = () => {
    dispatch(
      addProduct({
        name: title,
        price: Number(price),
        description,
        image,
        category: String(selected.name),
      }),
    );
  };
  useEffect(() => {
    if (add_response !== undefined) {
      navigation.goBack();
      dispatch(reset());
    }
  }, [add_response]);
  const renderFilter = ({item}) => {
    return <Filter item={item} selected={selected} setSelected={setSelected} />;
  };
  return (
    <View style={style.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        label={strings.product_title}
        mode="outlined"
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        label={strings.product_price}
        mode="outlined"
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        label={strings.product_description}
        mode="outlined"
        multiline
        style={style.description}
      />
      <TextInput
        value={image}
        onChangeText={setImage}
        label={strings.product_image}
        mode="outlined"
      />
      <Text style={style.category}>{strings.product_category}</Text>
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={renderFilter}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={style.button}>
        <Button
          loading={isLoading?.addProduct}
          mode="contained"
          color={colors.black}
          onPress={add}>
          {strings.add}
        </Button>
      </View>
    </View>
  );
};
