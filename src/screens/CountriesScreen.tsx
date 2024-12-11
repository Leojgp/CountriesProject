import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "./components/CountryCard";

export default function CountriesScreen({ route, navigation }: any) {
    const { continentName } = route.params;
    const { countries } = useCountries(continentName);

    if (!countries || countries.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No countries available</Text>
            </View>
        );
    }

    const handleCountryPress = (country: any) => {
        const { name, continent, capital, flag, languages, population, latlng } = country;
        navigation.navigate("CountryDetails", {
            name,
            continent,
            capital,
            flag,
            language: languages,
            population,
            latlng
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countries in {continentName}</Text>
            <FlatList
                data={countries}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <CountryCard
                        name={item.name}
                        capital={item.capital}
                        flag={item.flag}
                        languages={item.languages}
                        onPress={() => handleCountryPress(item)}
                    />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#f4f6f9",  
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginBottom: 20,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
    },
    emptyText: {
        fontSize: 18,
        color: "#888",  
        fontWeight: "400",
    },
    listContainer: {
        paddingBottom: 20, 
    },
});
