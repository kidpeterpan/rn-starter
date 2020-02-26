import React, {useState} from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';

const CounterScreen = () => {

const [counter,setCounter] = useState(0);

return (
    <View>
        <Button
            title='Increase Button'
            onPress={() => setCounter(counter+1)}
        />
        <Button 
            title='Decrease Button'
            onPress={() => setCounter(counter-1)}
        />
        <Text>Counter: {counter}</Text>
    </View>
);

}

const style = StyleSheet.create({});

export default CounterScreen;