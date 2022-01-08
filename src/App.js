import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { style as tw } from 'tailwind-react-native-classnames';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <StatusBar
        // animated={true}
        backgroundColor="#7F99C7"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition} hidden={hidden}
         /> */}
      <HomeScreen />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
