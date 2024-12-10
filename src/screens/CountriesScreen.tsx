import React from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useCountries } from "../hooks/useCountries";

export default function CountriesScreen() {
    const { countries, loading } = useCountries();

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

    return (
        <View style={styles.container}>
            <FlatList
                data={countries}
                keyExtractor={(item) => item.name} // Usamos `item.name` que es un string
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
