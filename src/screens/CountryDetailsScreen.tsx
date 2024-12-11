import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CountryDetailsScreen({ route, navigation }: any) {
  const { name, continent, capital, flag, language, population, latlng } = route.params;

  return (
    <View>
        <Text>{name}</Text>
        <Text>Continent: {continent}</Text>
        <Text>Capital: {capital}</Text>
        <Text>Language: {language}</Text>
        <Image source={{ uri: flag }}/>
        <Text>Population: {population}</Text>
        <Text>Latitude: {latlng[0]} Longitude: {latlng[1]}</Text>
      </View>
  )
}

const styles = StyleSheet.create({})