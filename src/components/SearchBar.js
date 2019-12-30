import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style={ styles.background}>
            <Feather name='search' size={30}/>
            <Text>Hello from SearchBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 20
    }
})

export default SearchBar