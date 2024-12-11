import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

const continents = [
    { name: 'Africa', key: 'africa' },
    { name: 'Asia', key: 'asia' },
    { name: 'Europe', key: 'europe' },
    { name: 'America', key: 'america' },
    { name: 'Oceania', key: 'oceania' },
];

export default function ContinentsScreen({ navigation }: any) {
    const navigateToCountries = (continentName: string) => {
        navigation.navigate('Countries', { continentName });
    };

    const renderItem = ({ item }: { item: { name: string; key: string } }) => (
        <View style={styles.listItem}>
            <Button
                title={item.name}
                onPress={() => navigateToCountries(item.key)}
                color="#007BFF"
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a Continent</Text>
            <FlatList
                data={continents}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    list: {
        width: '100%',
        alignItems: 'center'
    },
    listItem: {
        width: '70%',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden', 
    },
});
