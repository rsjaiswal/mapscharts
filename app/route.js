import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//component

import SignIn from './components/auth';
import Splash from './components/Splash';
import Countrychart from './components/Countrychart';
import Barchart from './components/Barchart';
import Progresschart from './components/Progresschart';
import Dashboard from './components/Dashboard';

const ModeHeader = {headerShown: false};

const Sp = createStackNavigator();

function splashstack() {
  return (
    <Sp.Navigator>
      <Sp.Screen name="MySplash" component={Splash} options={ModeHeader} />
    </Sp.Navigator>
  );
}

const Astack = createStackNavigator();

function AppStack() {
  return (
    <Astack.Navigator>
      <Astack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTitle: 'IndiaChart',
          headerTintColor: '#4B0082',
          headerTitleAlign: 'center',
          headerLeft: null,
        }}
      />
      <Astack.Screen
        name="Countrychart"
        component={Countrychart}
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTitle: 'Country Chart',
          headerTintColor: '#4B0082',
          headerTitleAlign: 'center',
        }}
      />
      <Astack.Screen
        name="Barchart"
        component={Barchart}
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTitle: 'Bar Chart',
          headerTintColor: '#4B0082',
          headerTitleAlign: 'center',
        }}
      />
      <Astack.Screen
        name="Progresschart"
        component={Progresschart}
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTitle: 'Progress Chart',
          headerTintColor: '#4B0082',
          headerTitleAlign: 'center',
        }}
      />
    </Astack.Navigator>
  );
}

const AuthS = createStackNavigator();

function AuthStack() {
  return (
    <AuthS.Navigator>
      <AuthS.Screen name="SignIn" component={SignIn} options={ModeHeader} />
    </AuthS.Navigator>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={splashstack}
          options={ModeHeader}
        />
        <Stack.Screen name="App" component={AppStack} options={ModeHeader} />
        <Stack.Screen name="Auth" component={AuthStack} options={ModeHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
