import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Introduction, Jobs, SavedJobs} from './pages';

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={'Intro'} component={Introduction} />
        <Stack.Screen name={'Jobs'} component={Jobs} />
        <Stack.Screen name={'SavedJobs'} component={SavedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
