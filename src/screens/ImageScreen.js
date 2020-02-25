import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ImageDetail from './ImageDetail'; // Noted Import Default Do Not Use { }
    
const ImageScreen = () => {
    const details = [
        { text : 'Airi' , imageSource : {uri: 'https://static2.garena.in.th/data/rov/hero/image/aa631b69c083f3018d8d698dc80f56f8.png'}},
        { text : 'Aleister' , imageSource : {uri: 'https://static2.garena.in.th/data/rov/hero/image/a52f00e01256a080d3bec3e9a1facc3d.png'}},
        { text : 'Alice' , imageSource :{uri: 'https://static2.garena.in.th/data/rov/hero/image/911290b5040e5ec501b880a3c4c2c349.png'}},
        { text : 'Amiry' , imageSource : {uri: 'https://static2.garena.in.th/data/rov/hero/image/9adcf2c14b442c285a1939ff4641ef57.png'}},
    ];

return (
    <View>
         <FlatList
            keyExtractor={details => details.text} // just put object arrays.key
            data={details}
            renderItem={({item})=><ImageDetail detail={item}/>}
         />
    </View>
);

}


const style = StyleSheet.create({

});

export default ImageScreen;