import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {

    const [inputTxt,setInputTxt] = useState('');

    return (
        <View>
            <TextInput 
                onChangeText={ value => setInputTxt(value) }
                autoCapitalize='none'
                autoCorrect={false}
                style={{}}
            />
            <Text>Input Text: {inputTxt}</Text>
            { inputTxt.length < 4 ? (<Text>*** input at least 4 characters ***</Text>):null}
        </View>
    );
}

const styles = StyleSheet.create({});

export default TextScreen;