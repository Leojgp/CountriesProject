import { StyleSheet, Button, Text, View, } from 'react-native'
import React from 'react'

export default function ContinentsScreen({ route, navigation }: any) {
    return (
        <View>
            <Text>ContinentsScreen</Text>
            <Button
                title="Africa"
                onPress={() => navigation.navigate('Countries', { continentName: 'africa' })}
            />
            <Button
                title="Asia"
                onPress={() => navigation.navigate('Countries', { continentName: 'asia' })}
            />
            <Button
                title="Europe"
                onPress={() => navigation.navigate('Countries', { continentName: 'europe' })}
            />
            <Button
                title="America"
                onPress={() => navigation.navigate('Countries', { continentName: 'america' })}
            />
            <Button
                title="Oceania"
                onPress={() => navigation.navigate('Countries', { continentName: 'oceania' })}
            />
        </View>
    )
}

const styles = StyleSheet.create({})