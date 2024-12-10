import { StyleSheet, Button, Text, View, } from 'react-native'
import React from 'react'

export default function ContinentsScreen({ route, navigation }: any) {
    return (
        <View>
            <Text>ContinentsScreen</Text>
            <Button
                onPress={() => navigation.navigate('Countries')}
                title="Country"
            />
        </View>
    )
}

const styles = StyleSheet.create({})