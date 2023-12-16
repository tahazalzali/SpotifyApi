import {Platform, SafeAreaView, StatusBar, Image} from 'react-native';
import React from 'react';
import useLogin from '../../hooks/use-login';
import {
  AuthButton,
  ButtonTitle,
  LoginBody,
  SpotifyIcon,
} from '../../components/screens/login/styled/styled';
import AppHeader from '../../../src/components/screens/search/AppBar/AppHeader';

const Login = () => {
  const {authLogin} = useLogin();
  const iconSource = require('../../assets/images/spotify-icon.png');
  return (
    <SafeAreaView>
      <AppHeader title={'Spotify Artist Search'} />
      {Platform.OS === 'ios' && (
        <StatusBar barStyle="light-content" translucent />
      )}
      <LoginBody>
        <AuthButton onPress={authLogin}>
          <ButtonTitle>Login </ButtonTitle>
          <SpotifyIcon source={iconSource} />
        </AuthButton>
      </LoginBody>
    </SafeAreaView>
  );
};

export default Login;
