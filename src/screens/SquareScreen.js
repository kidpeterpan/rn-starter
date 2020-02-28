import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    return (
        <View>
            <Text>Color Adjust App</Text>
            <ColorCounter color='Red'/>
            <ColorCounter color='Green'/>
            <ColorCounter color='Blue'/> 
        </View>
        );
}
const style = StyleSheet.create({});

export default SquareScreen;