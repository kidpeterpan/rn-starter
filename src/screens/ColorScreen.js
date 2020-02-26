import React, {useState} from 'react';
import {View, Button, StyleSheet , FlatList} from 'react-native';
import FlatListComponent from './FlatListComponent';

const ColorScreen = () => {


    const [colors, setColors] = useState([]);

    return (
        <View>
        <Button
            title='Add Color'
            onPress={() => setColors([...colors,randomRgb()])}
            />
        
        <FlatList
            keyExtractor={item=>item}
            data={colors}
            renderItem={({item}) => {
            return      <View 
                        title='a'
                        style={{ height:100, width:100, backgroundColor: item}}
                        />
            }}
        />
        
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`; // template string
}

export default ColorScreen;