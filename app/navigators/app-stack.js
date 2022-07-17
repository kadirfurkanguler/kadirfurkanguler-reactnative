import {CategoriesScreen, ProductDetailScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import style from './style';
import {SafeAreaView, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../utils/colors';
const Stack = createNativeStackNavigator();
export const AppStack = () => {
  return (
    <SafeAreaView style={style.safe_area}>
      <StatusBar animated={true} backgroundColor={colors.black} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="categoires-screen" component={CategoriesScreen} />
          <Stack.Screen
            name="product-detail-screen"
            component={ProductDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
