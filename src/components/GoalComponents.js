import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

import ButtonComponent from './ButtonComponent'
import CardComponent from './CardComponent'

import { data } from '../data'

const GoalScreen = () => {

  const showSnackbar = () => {
    console.log("Button Clicked")
  }


  return (
    <View style={styles.wrapper}>
      <View style={tw` mt-5 px-10 `}>
        <View>
          <Text style={tw`text-xl py-4`}>Your Goals</Text>
          <View style={tw`h-80`}>
            <CardComponent data={data} />
          </View>
        </View>
        <View style={styles.buttonStyles}>
          <ButtonComponent handlePress={showSnackbar} title="Show Snackbar" style={tw`rounded-full`} />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  buttonStyles: {
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // bottom: 0,
  }
});

export default GoalScreen;
