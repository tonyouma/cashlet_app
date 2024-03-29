import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import GoalDetails from './screens/GoalDetails';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
