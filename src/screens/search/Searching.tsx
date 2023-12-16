import {
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import functions from '../../utils/functions';
import AppBar from '../../components/screens/search/AppBar/AppBar';
import AppHeader from '../../components/screens/search/AppBar/AppHeader';
import useSearch from '../../hooks/use-search';
import {NavigationContext} from '@react-navigation/native';

const Searching = () => {
  const {search, filterResults, searchResults, handleSearch} = useSearch();
  const itemWidth = Dimensions.get('screen').width / 5;
  const navigation = useContext(NavigationContext);

  return (
    <SafeAreaView>
      <AppHeader title={'Spotify Artist Search'} />

      <AppBar handleSearch={handleSearch} />
      <FlatList
        style={styles.container}
        data={search.length > 1 ? filterResults : searchResults}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item}
            onPress={() => {
              navigation.navigate('Artist', {artist: item});
              console.log(JSON.stringify(item));
            }}
            style={{
              width: itemWidth,
              borderWidth: 1,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            <View style={{height: 100}}>
              <Image
                style={{
                  width: itemWidth / 1.02,
                  height: 100,
                  bottom: 8,
                  alignSelf: 'center',
                }}
                source={{uri: item?.images[0]?.url}}
                resizeMode="contain"
              />
            </View>
            <Text
              adjustsFontSizeToFit
              style={{
                width: '100%',
                color: '#000',
                textAlign: 'center',
                fontSize: 10,
              }}>
              {item.name}
            </Text>
            <Text
              adjustsFontSizeToFit
              style={{
                width: '100%',
                color: '#000',
                fontSize: 8,
                textAlign: 'center',
                marginBottom: 10,
              }}>
              {functions.formatNumber(item.followers?.total)} {'followers'}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Searching;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginBottom: 100,
    paddingHorizontal: 10,

    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
