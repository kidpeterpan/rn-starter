import React from 'react';
import { View,FlatList, Text, StyleSheet } from 'react-native';

const FlatListComponent = () => {

    const friendList = [
        { id:'1',name : 'Jame'},
        { id:'2',name : 'Pon'},
        { id:'3',name : 'Nat'},
        { id:'4',name : 'a'},
        { id:'5',name : 'b'},
        { id:'6',name : 'c'},
        { id:'7',name : 'd'},
        { id:'8',name : 'e'},
        { id:'9',name : 'f'},
        { id:'10',name : 'g'},
        { id:'11',name : 'h'},
    ];

    const style = StyleSheet.create({
          textStyle:{
              fontSize: 30,
              marginVertical: 50
            }
    });
    /** can not use destructure from data for keyExtractor pass 
     * "friendList" insteand  and key expected "string" */
    return <View><FlatList
            data={friendList} 
            renderItem={({item}) => {
                return <Text style={style.textStyle}>{item.name}</Text>}
            } 
            keyExtractor={(friendList) => friendList.id} /></View> 
}

export default FlatListComponent;