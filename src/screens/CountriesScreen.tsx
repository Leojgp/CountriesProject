import React from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "./components/CountryCard";


export default function CountriesScreen({ route, navigation }: any) {
    const { continentName } = route.params;
    const { countries, loading } = useCountries(continentName);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading countries...</Text>
            </View>
        );
    }

    if (!countries || countries.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text>No countries available</Text>
            </View>
        );
    }

    const handleCountryPress = (country: any) => {
        navigation.navigate("CountryDetails", { country });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={countries}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <CountryCard
                        name={item.name}
                        //capital={item.capital}
                        flag={item.flag}
                        //languages={item.languages}
                        onPress={() => handleCountryPress(item)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f8f9fa",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});