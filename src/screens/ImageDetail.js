import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({detail}) => {
    return (
        <View>
            <Image 
                source={detail.imageSource}  
                style={{width: 500, height: 500}} 
            />
            <Text>{detail.text}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default ImageDetail;