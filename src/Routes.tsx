import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {horizontalAnimation} from './utils/transition';
import {MyTheme} from './utils/theme';
import Login from './screens/login/Login';
import useLogin from './hooks/use-login';

import {SearchRoutes} from './screens/StackRoutes';

const Stack = createStackNavigator();

const Routes = () => {
  const {state} = useLogin();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={horizontalAnimation}>
        {state.auth.token === '' ? (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen name="Home" component={SearchRoutes} />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
