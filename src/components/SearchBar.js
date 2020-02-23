import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={ styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
                placeholder='Search'
                style={styles.inputText}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={ () => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 13,
        flexDirection: 'row'
    },
    inputText: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }

})

export default SearchBar