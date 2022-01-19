import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';

import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

import ButtonComponent from './ButtonComponent'
import CardComponent from './CardComponent'

import { data } from '../data'

const GoalComponent = () => {
  const windowHeight = Dimensions.get("window").height;

  const popRef = useRef(new Animated.Value(windowHeight * -1)).current;

  let message = "This is an in app notification to show to the user when they perfom an action. Clicking should change the text"
  let newMessage = "User clicked snackbar"

  const [value, setValue] = useState(message);

  const handleClick = () => {
    setValue(newMessage);

  };

  const animateIn = () => {
    Animated.timing(popRef, {
      toValue: windowHeight * 0.55 * -1,
      duration: 700,
      useNativeDriver: Platform.OS !== "web",
    }).start(animateOut());
  };

  const animateOut = () => {
    setTimeout(() => {
      Animated.timing(popRef, {
        toValue: windowHeight * -1,
        duration: 800,
        useNativeDriver: Platform.OS !== "web",
      }).start();
    }, 10000);
  };

  const closeSnackbar = () => {
    Animated.timing(popRef, {
      toValue: windowHeight * -1,
      duration: 450,
      useNativeDriver: Platform.OS !== "web",
    }).start();
  };


  return (
    <SafeAreaView style={tw`bg-white rounded-t-2xl`}>
      <View style={tw`mt-5 h-full`}>
        <Text style={tw`text-xl py-4 px-10`}>Your Goals</Text>

        <View style={tw` px-5`}>
          <View style={tw``}>
            <CardComponent data={data} />
          </View>
        </View>

        <Animated.View
          style={[
            tw`rounded-lg justify-center items-center mx-4`,
            styles.container,
            {
              transform: [{ translateY: popRef }],
            },
          ]}
        >
          <View style={[tw`flex flex-row justify-between items-center w-full rounded-xl py-3 px-3`]}>
            <View>
              <Text style={tw`text-white w-80`} onPress={handleClick}>
                {value}
              </Text>
            </View>
            <TouchableOpacity onPress={closeSnackbar}>
              <Icon type="feather" size={28} name="x" color="#fff" style={tw`pr-2`} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <View style={{ flex: 1 }}>
          <View style={[tw`absolute bottom-24 w-full`]}>
            <ButtonComponent
              handlePress={() => {
                animateIn();
              }}
              title="Show Snackbar" classprops={tw`rounded-full py-3 mx-6 `} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e91780",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // marginLeft: 10,
  },

});


export default GoalComponent;
