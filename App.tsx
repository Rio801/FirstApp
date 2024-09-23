import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import ProfileScreen from './Home';

const stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />

        {/* <stack.Screen name="Profile" component={ProfileScreen} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
