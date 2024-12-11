import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CountryCard({ name, capital, flag, languages, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.flagContainer}>
        <Image source={{ uri: flag }} style={styles.flag} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.capital}>Capital: {capital}</Text>
        <Text style={styles.languages}>Languages: {languages.join(", ")}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f4f6f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderColor: "#d1d8e0", 
    borderWidth: 1,
    overflow: "hidden", 
  },
  flagContainer: {
    width: 70,  
    height: 50,
    borderRadius: 10, 
    overflow: "hidden", 
    marginRight: 15,
  },
  flag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3d3d3d", 
  },
  capital: {
    fontSize: 14,
    color: "#6c757d",
    marginVertical: 5,
  },
  languages: {
    fontSize: 14,
    color: "#6c757d", 
  },
});
