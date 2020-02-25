import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageDetail } from './ImageDetail';
    
const ImageScreen = () => {
    const imageDetail = [
        { text : 'a' , imageSource : '../../assets/icon.png'},
        { text : 'b' , imageSource : '../../assets/icon.png'},
        { text : 'c' , imageSource : '../../assets/icon.png'},
        { text : 'd' , imageSource : '../../assets/icon.png'},
        { text : 'e' , imageSource : '../../assets/icon.png'},
        { text : 'f' , imageSource : '../../assets/icon.png'}
    ];

    return imageDetail.map( detail => <ImageDetail detail={detail}/>);
}

const style = StyleSheet.create({

});

export default ImageScreen;