import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

import { useToast } from "react-native-toast-notifications";

import ButtonComponent from './ButtonComponent'
import CardComponent from './CardComponent'

import { data } from '../data'

const GoalComponent = () => {
  const toast = useToast();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={tw` mt-5`}>
        <Text style={tw`text-xl py-4 px-10`}>Your Goals</Text>

        <View style={tw`flex px-5`}>
          <View style={tw`h-96`}>
            <CardComponent data={data} />
          </View>
          <ButtonComponent handlePress={() => {
            toast.show("This is an in app notification to show to the user when they perfom an action. Clicking should change the text", {
              type: "with_close_button",
              animationDuration: 100,
            })
          }
          } title="Show Snackbar" classprops={tw`rounded-full py-3`} />
        </View>

        <View style={styles.buttonStyles}>

        </View>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // display: 'flex',
    // justifyContent: 'space-between',

  },
  buttonStyles: {
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // bottom: 0,
    // flex: 1
  }
});

export default GoalComponent;
