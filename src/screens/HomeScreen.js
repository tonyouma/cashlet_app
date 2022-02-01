import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

import AccountInfo from '../components/AccountInfo';

import GoalComponent from '../components/GoalComponent'


const user = {
  name: 'John Doe',
  totalFunds: 100000,
}

const HomeScreen = () => {


  return (
    <SafeAreaView style={styles.main}>
      <View>
        <View style={tw`h-1/3`}><AccountInfo user={user} /></View>
        <View style={tw`h-2/3`}><GoalComponent /></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#485A7C",
  }
});

export default HomeScreen;
