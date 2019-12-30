import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const SearchBar = () => {
    return (
        <View style={ styles.background}>
            <Text>Hello from SearchBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(240,240,240)'
    }
})

export default SearchBar