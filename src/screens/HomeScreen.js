import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import  tw  from 'tailwind-react-native-classnames';

import GoalScreen from './GoalScreen'


const HomeScreen = () => {


  return (
    <SafeAreaView style={styles.main}>
    <View style={tw`flex`}>
      <View style={tw`text-white text-2xl font-normal pt-10 pl-10`}>
        <Text style={tw`text-white text-2xl font-normal `}>Afternoon Jo</Text>
        <Text style={tw`text-white text-base font-light py-2`}>Here's the latest</Text>
        <Text style={tw`text-green-500 text-4xl font-semibold pt-2`}>42,000</Text>
        <Text style={tw`text-white text-base font-light`}>Total Funds</Text>
      </View>
      
        <GoalScreen />
    
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
    backgroundColor: "#485A7C",
    height: "100%"
  } 
});

export default HomeScreen;
