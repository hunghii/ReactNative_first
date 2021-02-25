import React,{useState} from 'react';
import { StyleSheet, View, Text, FlatList,TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ProductItem from './ProductItem';
import { Actions } from 'react-native-router-flux';

const products = [
  {
    id: '1sfsfsd',
    title: 'Vegetables',
    images: require("../../images/Media.png"),
    count:23
  },
  {
    id: 'xvxvxv2', 
    title: 'Fruits',
    images: require("../../images/Media2.png"),
    count:23
  },
  {
    id: '3sdsdc', 
    title: 'Bread',
    images: require("../../images/Media1.png"),
    count:23
  },
  {
    id: '4bvcb', 
    title: 'Sweets',
    images: require("../../images/Media2.png"),
    count:23
  },
  {
    id: '5rrtet', 
    title: 'Sweets',
    images: require("../../images/Media1.png"),
    count:23
  },
  {
    id: '6dfgdfgfdg', 
    title: 'Savoy Cabbage',
    images: require("../../images/Media2.png"),
    count:23
  },
];



const ProductList = () => {

  const [data, setData] = useState(products);

  return (
    <View style={styles.container}>
      <Icon name="left" size={20} color="#2D0C57" style={{paddingTop:20,marginBottom:20}} onPress={() => Actions.login()} /> 
      <Text style={{color:'#2D0C57', fontSize:38, fontWeight:'bold',marginBottom:20}}>Categories</Text>
        <View style={styles.inputContainer}>
          <Icon name="search1" size={20} style={{color: '#000', paddingLeft: 10}}/>
            <TextInput style={styles.inputs}
              placeholder="Search"
              underlineColorAndroid='transparent'
            />
        </View>
        <View style={{flex: 1}}>
        {/* <ScrollView
          style={{flex: 1}}
             contentContainerStyle= {{ flexWrap: 'wrap', justifyContent: "space-between", flexDirection: 'row'}}
        >
          {
            dataItem.map((item) => {
              return <ProductList item={item}
          />
            })
          }
        </ScrollView> */}
        <FlatList
          style={{flex: 1}}
          contentContainerStyle= {{flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between"}}
            data={products}
            renderItem={({ item }) => 
            <ProductItem item={item} />}
              keyExtractor={(item) => item.id}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    paddingLeft:15,
    paddingRight:15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    height:50,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    flex:1,
    fontSize: 20,
},
});

export default ProductList;