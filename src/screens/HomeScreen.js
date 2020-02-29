import React from "react";
import { View,Text,Button, StyleSheet, TouchableOpacity } from "react-native";

 
const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
       title='Go to component demo'
       onPress={()=> navigation.navigate('Components')}
    />
    <Button
       title='Go to list demo'
       onPress={()=> navigation.navigate('List')}
    />
    <Button
       title='Go to image demo'
       onPress={()=> navigation.navigate('Image')}
    />
    <Button
       title='Go to counter demo'
       onPress={()=> navigation.navigate('Counter')}
    />
    <Button 
      title='Go to color random demo'
      onPress={() => navigation.navigate('Color')}
    />
    <Button
      title='Go to Square Screen Demo'
      onPress={() => navigation.navigate('Square')}
    />
    <Button
      title='Go to Square Screen With Reducer Demo'
      onPress={() => navigation.navigate('SquareReducer')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
