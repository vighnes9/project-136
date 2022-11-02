import React,{Component} from "react";
import {View, Text, FlatList, StyleSheet, Alert, SafeAreaView} from "react-native";
import {ListItem} from "react-native-elements";
import axios from "axios";

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData : [],
            url : "http://localhost:5000/"
        };
    }
    componentDidMount(){
        this.getPlanets();
    }
    getPlanets = ()=>{
        const{url} = this.state;
        axios
        .get(url)
        .then(response=>{
            return this.setState({listData : response.data.data});
        })
        .catch(error=>{
            Alert.alert(error.message);
        })
    };
    renderItem = ({item, index})=>{
        <ListItem 
            key = {index}
            title = {`Planet : ${item.name}`}
            subtitle = {`Distance From Earth : ${item.distance_from_earth}`}
            titleStyle = {styles.title}
            containerStyle = {styles.listContainer}
            bottomDivider
            chveron
            onPress = {()=>
                this.props.navigation.navigate("details", {planet_name : item.name})
            }
        />
    };
    keyExtractor = (item,index)=> index.toString();
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
}