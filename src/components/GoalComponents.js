import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

import { useToast } from "react-native-toast-notifications";

import ButtonComponent from './ButtonComponent'
import CardComponent from './CardComponent'

import { data } from '../data'

const GoalScreen = () => {
  const [open, setOpen] = React.useState(false);

  const toast = useToast();

  const showSnackbar = () => {
    console.log("Button Clicked")
  }

  // show tooltip on button click


  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={tw` mt-5`}>
        <Text style={tw`text-xl py-4 px-10`}>Your Goals</Text>

        <View style={tw` px-5`}>
          <View style={tw`h-80`}>
            <CardComponent data={data} />
          </View>
          <TouchableOpacity>
            <ButtonComponent handlePress={() =>
              toast.show("This is a customized toast with close button!", {
                type: "with_close_button",
                animationDuration: 100,
              })
            } title="Show Snackbar" style={tw`rounded-full`} />
          </TouchableOpacity>

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
    display: 'flex',
    justifyContent: 'space-between',

  },
  buttonStyles: {
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // bottom: 0,
    // flex: 1
  }
});

export default GoalScreen;
