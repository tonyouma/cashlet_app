import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// import { style as tw } from 'tailwind-react-native-classnames';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <StatusBar
        // animated={true}
        backgroundColor="#7F99C7"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition} hidden={hidden}
         /> */}
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
