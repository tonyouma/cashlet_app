import React from 'react';
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

  let message = 'This is an in app notification to show to the user when they perfom an action. Clicking should change the text';

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={tw` mt-5 h-full`}>
        <Text style={tw`text-xl py-4 px-10`}>Your Goals</Text>

        <View style={tw` px-5`}>
          <View style={tw``}>
            <CardComponent data={data} />
          </View>

        </View>
        <View style={{ flex: 1 }}>
          <View style={[tw`absolute bottom-24 w-full`]}>
            <ButtonComponent handlePress={() => {
              let id = toast.show(message = `${message}`, {
                type: "popup",
                animationDuration: 400,
                duration: 10000,
                onPress: () => {
                  if (id) {
                    toast.update(id, "User clicked snackbar", {
                      type: "popup",
                    });
                  }
                }

              })
            }
            } title="Show Snackbar" classprops={tw`rounded-full py-3 mx-6 `} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default GoalComponent;
