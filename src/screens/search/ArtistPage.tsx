import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
  View,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import useGetArtist from '../../hooks/use-getArtist';
import AppHeader from '../../../src/components/screens/search/AppBar/AppHeader';
import {ArtistDetailsContainer} from '../../../src/components/screens/login/styled/styled';
import functions from '../../../src/utils/functions';
import {
  HeaderText,
  HeaderLabel,
} from '../../../src/components/screens/search/styled/styled';

const ArtistPage = ({route}) => {
  const {artist} = route?.params;

  const {artistResult, loading} = useGetArtist({artist});
  const itemWidth = Dimensions.get('screen').width / 5;

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <AppHeader title={'Spotify Artist Search'} />
      <HeaderText>{artist.name}</HeaderText>
      <HeaderLabel>{'Album'}</HeaderLabel>

      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <FlatList
            style={styles.container}
            data={artistResult}
            keyExtractor={item => item.id.toString()}
            numColumns={4}
            contentContainerStyle={{paddingBottom: 100}}
            renderItem={({item}) => (
              <View
                onPress={() => {
                  Linking.openURL(item.external_urls.spotify);
                }}
                style={{
                  width: itemWidth,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#000',
                    bottom: 3,
                    height: 87.4,
                    width: itemWidth / 1.02,
                  }}>
                  <Image
                    style={{
                      height: 90,

                      alignSelf: 'center',
                      width: '100%',
                    }}
                    source={{uri: item?.images[0]?.url}}
                    resizeMode="contain"
                  />
                </View>
                <ArtistDetailsContainer>
                  <Text
                    adjustsFontSizeToFit
                    style={{
                      width: '100%',
                      height: 'auto',
                      fontWeight: '800',

                      color: '#000',
                      fontSize: 8,
                    }}>
                    {item?.name}
                  </Text>
                  <Text
                    adjustsFontSizeToFit
                    style={{
                      width: '100%',
                      color: '#000',
                      fontSize: 8,
                    }}>
                    {functions.mapArtistsToNames(item.artists)}
                  </Text>
                  <Text
                    adjustsFontSizeToFit
                    style={{
                      width: '100%',
                      color: '#000',
                      marginTop: 4,
                      fontSize: 7,
                    }}>
                    {item?.release_date}
                  </Text>

                  <Text
                    adjustsFontSizeToFit
                    style={{
                      width: '100%',
                      color: '#000',
                      fontSize: 8,
                    }}>
                    {item?.total_tracks} {'tracks'}
                  </Text>
                </ArtistDetailsContainer>
                <TouchableOpacity
                  style={styles.link}
                  onPress={() => {
                    Linking.openURL(item.external_urls.spotify);
                  }}>
                  <Text
                    style={{
                      width: '100%',
                      color: '#000',
                      fontSize: 8,
                      textAlign: 'center',
                    }}>
                    Open in spotify
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default ArtistPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,

    backgroundColor: '#fff',
    paddingTop: 10,
  },

  link: {
    borderTopWidth: 0.5,
    borderTopColor: '#000',
    backgroundColor: '#e5e5e5',
  },
});
