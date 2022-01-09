import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ToastProvider, useToast } from "react-native-toast-notifications";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { style as tw } from 'tailwind-react-native-classnames';

import HomeScreen from './screens/HomeScreen';
import GoalDetails from './screens/GoalDetails';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ToastProvider placement="top">
          {/* <StatusBar
        // animated={true}
        backgroundColor="#7F99C7"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition} hidden={hidden}
         /> */}
          <Stack.Navigator>

            <Stack.Screen
              component={HomeScreen}
              name="HomeScreen"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              component={GoalDetails}
              name="GoalDetails"
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </ToastProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
