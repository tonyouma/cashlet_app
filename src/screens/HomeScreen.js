import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

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
