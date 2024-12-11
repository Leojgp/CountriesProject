import { Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
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

  const mapURL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=5/${lat}/${lng}`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flagContainer}>
        <Image source={{ uri: flag }} style={styles.flag} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.infoText}>Continent: <Text style={styles.highlight}>{continent}</Text></Text>
        <Text style={styles.infoText}>Capital: <Text style={styles.highlight}>{capital}</Text></Text>
        <Text style={styles.infoText}>Language: <Text style={styles.highlight}>{language}</Text></Text>
        <Text style={styles.infoText}>Population: <Text style={styles.highlight}>{population}</Text></Text>
        <Text style={styles.coordinatesText}>Latitude: {lat}, Longitude: {lng}</Text>
      </View>
      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ uri: mapURL }}
          style={styles.map}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f6f9',
  },
  flagContainer: {
    alignItems: 'center',
    marginBottom: 15, 
  },
  flag: {
    width: 80,  
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#3498db',
  },
  coordinatesText: {
    fontSize: 14,
    color: '#444',
    marginTop: 6,
  },
  mapContainer: {
    marginVertical: 15,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  map: {
    width: '100%',
    height: 400,  
  },
  buttonContainer: {
    marginTop: 10, 
  },
});
