import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function CountryDetailsScreen({ route, navigation }: any) {
  const { name, continent, capital, flag, language, population, latlng } = route.params;

  if (!latlng || latlng.length < 2) {
    return (
      <View>
        <Text>No location available for this country.</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>

    );
  }

  const lat = latlng[0];
  const lng = latlng[1];

  const mapURL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=13/${lat}/${lng}`;


  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>{name}</Text>
        <Text>Continent: {continent}</Text>
        <Text>Capital: {capital}</Text>
        <Text>Language: {language}</Text>
        <Image source={{ uri: flag }} />
        <Text>Population: {population}</Text>
        <Text>Latitude: {latlng[0]} Longitude: {latlng[1]}</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        source={{ uri: mapURL }}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  infoContainer: {
    marginBottom: 20,
  }
})