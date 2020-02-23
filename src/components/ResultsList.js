import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultDetails from './ResultDetails'

const ResultsList = ({ title, results }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return <ResultDetails result={item} />
            }}
        />
    </View>
} 

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 13,
        marginBottom: 5
    },
    container: {
        marginBottom: 20
    }
})

export default ResultsList