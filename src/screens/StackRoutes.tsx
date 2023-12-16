import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Searching from './search/Searching';
import {verticalAnimation} from '../utils/transition';
import Search from './search/Search-base';
import ArtistPage from './search/ArtistPage';

export const SearchRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search Base" component={Search} />
      <Stack.Screen
        name="Searching"
        component={Searching}
        options={verticalAnimation}
      />

      <Stack.Screen name="Artist" component={ArtistPage} />
    </Stack.Navigator>
  );
};
