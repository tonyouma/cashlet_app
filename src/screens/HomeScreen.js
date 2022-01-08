import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import tw from 'tailwind-react-native-classnames';
import AccountInfo from '../components/AccountInfo';

import GoalComponent from '../components/GoalComponents'


const user = {
  name: 'John Doe',
  totalFunds: 100000,
}

const HomeScreen = () => {


  return (
    <SafeAreaView style={styles.main}>
      <View style={tw`flex`}>

        <AccountInfo user={user} />
        <GoalComponent />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#485A7C",
    height: "100%"
  }
});

export default HomeScreen;
