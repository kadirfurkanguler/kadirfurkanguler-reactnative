import {Provider} from 'react-redux';
import React from 'react';
import {store} from './redux/store';
import {AppStack} from './navigators';
export default () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
