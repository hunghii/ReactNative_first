/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FruitDetail from './src/containers/FruitDetail';
import ProductInfo from './src/containers/ProductInfo';
import Login from './src/containers/Login';
import Product from './src/containers/Product/';
import Shop from './src/containers/Shop';
import Icon from 'react-native-vector-icons/AntDesign';
import Users from './src/containers/Users';
import Credit from './src/containers/Credit';
const App = () => {
  return (
    <Router>
      <Scene 
        key="root" 
        hideNavBar
        showLabel={false}
      >
        <Scene
          key="login"
          component={Login}
        />
        <Scene
          key="fruit_detail"
          component={FruitDetail}
        />
        <Scene
          key="product_info"
          component={ProductInfo}
        />
        <Scene
          key="credit"
          component={Credit}
        />
        <Scene
          hideNavBar
          tabs>
          <Scene
              key="product"
              component={Product}
              hideNavBar
              icon={({ focused }) => (
                <Icon
                  style={{ width: 30 }}
                  name="appstore1"
                  size={30}
                  color={focused ? '#FFC920' : '#353535'}
                />
              )}
            />
            <Scene
              key="shop"
              component={Shop}
              hideNavBar
              icon={({ focused }) => (
                <Icon
                  style={{ width: 30 }}
                  name="shoppingcart"
                  size={30}
                  color={focused ? '#FFC920' : '#353535'}
                />
              )}
            />
            <Scene
              key="user"
              component={Users}
              hideNavBar
              icon={({ focused }) => (
                <Icon
                  style={{ width: 30 }}
                  name="user"
                  size={30}
                  color={focused ? '#FFC920' : '#353535'}
                />
              )}
            />
            </Scene>
        </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default App;
