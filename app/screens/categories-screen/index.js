import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {categories, products} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import {Filter, Product} from '../../components';
import strings from '../../utils/strings';
import colors from '../../utils/colors';
export const CategoriesScreen = () => {
  const dispatch = useDispatch();
  const {data: categorydata, isLoading: categoryLoading} = useSelector(
    state => state.categories,
  );
  const {data: productData, isLoading: productLoading} = useSelector(
    state => state.products,
  );

  const all = {id: 0, name: strings.all};
  const [data, setData] = useState([all]);
  const [productList, setProductList] = useState([]);
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (categorydata?.length > 0) {
      setData([all, ...categorydata]);
    }
  }, [categorydata]);

  useEffect(() => {
    if (productData?.length > 0) {
      setProductList(productData);
    }
  }, [productData]);

  useEffect(() => {
    if (productData?.length > 0) {
      if (selected.id != 0) {
        setProductList(
          productData.filter(item => item.category === selected.name),
        );
      } else {
        setProductList(productData);
      }
    }
  }, [selected]);

  const getData = () => {
    dispatch(categories());
    dispatch(products());
  };

  const renderItem = ({item}) => {
    return <Filter item={item} selected={selected} setSelected={setSelected} />;
  };
  const renderProduct = ({item}) => {
    return <Product item={item} />;
  };
  return categoryLoading?.category || productLoading?.product ? (
    <View style={style.loading_container}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  ) : (
    <View style={style.container}>
      <Text style={style.title}>{strings.app_name}</Text>
      <ScrollView horizontal>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
      <View style={style.content}>
        <FlatList
          numColumns={2}
          data={productList}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index}
        />
      </View>
      <TouchableOpacity activeOpacity={0.6} style={style.add_container}>
        <Text style={style.add}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
