import React,{useState} from 'react';
import { StyleSheet, View, Text, FlatList,TextInput, ScrollView,Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import FruitTab from './FruitTab';
import FruitItem from './FruitItem'
const fruit = [
  {
    id: '3ewre',
    name:'Boston Lettuce',
    price: 1.01,
    unit:'kg',
    description: 'Сabbage and lettuce',
    count: 5,
    images: require("../../images/Item.png"),
  },
  {
    id: '4werewr', 
    name:'Purple Cauliflower',
    price: 1.85,
    unit:'kg',
    description: 'Oinons garlic',
    count: 3,
    images: require("../../images/Item1.png"),
  },
  {
    id: '5dsdf', 
    name:'Savoy Cabbage',
    price: 1.42,
    unit:'kg',
    description: 'Сucumbers tomatoes',
    count: 7,
    images: require("../../images/Item2.png"),
  },
  {
    id: '3efdsf', 
    name:'Ludng auj',
    price: 230,
    unit:'kg',
    description: 'Oinons and garlic',
    count: 11,
    images: require("../../images/Media2.png"),
  },
];


const vegetables = require("../../images/Vegetables.png");
const FruitDetail = () => {

  const [data, setData] = useState(fruit);

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <View>
                <Icon name="left" size={20} color="#2D0C57" style={{paddingTop:20,marginBottom:20}} onPress={() => Actions.product()} /> 
                <Text style={{color:'#2D0C57', fontSize:38, fontWeight:'bold',marginBottom:20}}>Vegetables</Text>
            </View>
            <View style={styles.imgVegetables}>
                <Image source={vegetables} style={styles.vegetables} resizeMode = "contain" ></Image>
            </View>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="search1" size={20} style={{color: '#000', paddingLeft: 10}}/>
            <TextInput style={styles.inputs}
                placeholder="Search"
                underlineColorAndroid='transparent'
            />
        </View>
        <View>
          <FlatList
              contentContainerStyle= {{flexDirection: 'row'}}
              data={fruit}
              renderItem={({ item }) => 
              <FruitTab item={item} />}
                keyExtractor={(item) => item.id}
              />
        </View>
        <View>
          <FlatList
              contentContainerStyle= {{ flexWrap: 'wrap'}}
              data={fruit}
              renderItem={({ item }) => 
              <FruitItem item={item} />}
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
  imgVegetables:{
    position: 'absolute',
    left: 240,
    top:  0,
  },
  vegetables: {
    height: 150,
    width:180,
    
  }
});

export default FruitDetail;