import React from 'react';
import {View, Text, Image, StyleSheet, ShadowPropTypesIOS } from 'react-native';

const ImageDetail = ({detail}) => {
    return (
        <View>
            <image source={detail.imageSource} />
            <Text>{detail.text}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default ImageDetail;