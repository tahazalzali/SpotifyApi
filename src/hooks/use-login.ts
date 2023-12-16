import {useContext} from 'react';
import {authorize} from 'react-native-app-auth';
import {MyContext} from '../context/context';
import {Types} from '../types/reducer-type';

const authConfig = {
  clientId: 'd790a7d529534d8eb39f33eb4bae1786',
  redirectUrl: 'com.beirut://oauth/',
  scopes: ['playlist-modify-public', 'playlist-modify-private'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

export default function useLogin() {
  const {state, dispatch} = useContext(MyContext);

  const authLogin = async () => {
    try {
      const result = await authorize(authConfig);
      dispatch({
        type: Types.Auth,
        payload: {
          token: result.accessToken,
        },
      });
    } catch (e) {
      console.warn(e);
    }
  };

  return {
    state,
    authLogin,
  };
}
