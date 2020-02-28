import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const ColorCounter = ({color}) => {
    return (<View><Text>{color}</Text><Button
                title='Increase'
                onPress={() => console.log('Increasing') }
                /><Button
                title='Decrease'
                onPress={() => console.log('Decreasing') }/></View>
    );
}
const style = StyleSheet.create({
});
export default ColorCounter;