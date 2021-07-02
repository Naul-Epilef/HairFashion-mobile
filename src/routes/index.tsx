import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BackgroundStyled from '../component/BackgroundStyled';
import Home from './home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={() => (
            <BackgroundStyled>
              <Home />
            </BackgroundStyled>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
