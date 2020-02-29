import React, {useReducer} from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';

const reducer = (state,action) => {
    switch(action.type){
        case 'increase_counter':
            return {...state, counter: state.counter + action.payload};
        case 'decrease_counter':
            return {...state, counter: state.counter + action.payload};
    }
}

const CounterScreenWithReducer = () => {
const [state,dispatch] = useReducer(reducer,{ counter: 0 });
const { counter } = state;

return (
    <View>
        <Button
            title='Increase Button'
            onPress={() => dispatch({type:'increase_counter',payload: 1})}
        />
        <Button 
            title='Decrease Button'
            onPress={() => dispatch({type:'decrease_counter',payload: -1})}
        />
        <Text>Counter: {counter}</Text>
    </View>
);

}

const style = StyleSheet.create({});

export default CounterScreenWithReducer;