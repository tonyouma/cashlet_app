import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

import ButtonComponent from '../components/ButtonComponent'
import CardComponent from '../components/CardComponent'

import { data } from '../data'

const GoalScreen = () => {

  const showSnackbar = () => {
    console.log("Button Clicked")
  }


  return (
    <View style={tw`h-full bg-white rounded-t-lg mt-5 px-10`}>
      <Text style={tw`text-xl py-4`}>Your Goals</Text>
      <CardComponent data={data} />
      <ButtonComponent handlePress={showSnackbar} title="Show Snackbar" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default GoalScreen;
