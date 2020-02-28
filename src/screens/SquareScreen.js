import React, {useState} from 'react';
import { View , Text , StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREASEMENT = 10;

const SquareScreen = () => {

    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    const handleRedIncrease = () => { (red > 255)? null : setRed(red + INCREASEMENT)}
    const handleRedDecrease = () => { (red < 0)? null : setRed(red - INCREASEMENT)}

    const handleGreenIncrease = () => { (green > 255)? null : setGreen(green + INCREASEMENT)}
    const handleGreenDecrease = () => { (green < 0)? null : setGreen(green - INCREASEMENT)}

    const handleBlueIncrease = () => { (blue > 255)? null : setBlue(blue + INCREASEMENT)}
    const handleBlueDecrease = () => { (blue < 0)? null : setBlue(blue - INCREASEMENT)}

    return (
        <View>
            <Text>Color Adjust App</Text>
            <ColorCounter 
                color='Red'
                onIncrease={ handleRedIncrease }
                onDecrease={ handleRedDecrease }
            />
            <ColorCounter 
                color='Green'
                onIncrease={ handleGreenIncrease }
                onDecrease={ handleGreenDecrease } 
                />
            <ColorCounter 
                color='Blue'
                onIncrease={ handleBlueIncrease }
                onDecrease={ handleBlueDecrease }
                /> 
            <Text>Red: {red}, Green: {green}, Blue: {blue}</Text>    
            <View 
                style={{ height:150,width:150,backgroundColor: `rgb(${red},${green},${blue})` } }
            />
        </View>
        );
}
const style = StyleSheet.create({});

export default SquareScreen;