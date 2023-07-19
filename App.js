import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './screens/ChatScreen';
import Header from './Components/Header';
import LoginScreen from './screens/LogIn';

const Stack = createStackNavigator();

// navigate used to navigate between screens in your app
// stack navigator that provides a way to transition between screens using a stack-based navigation model
// stack screen represents a screen within the StackNavigator. It defines the configuration for a specific screen, including the component to render for that screen
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;