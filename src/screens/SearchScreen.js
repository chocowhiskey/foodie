import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [errorMessage, searchApi, results] = useResults()
    console.log(results)

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return <View style={{ flex: 1 }}>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
        />
        <Text>{term}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList title='Cost Effective' results={filterResultsByPrice('€')} />
            <ResultsList title='Bit Pricier' results={filterResultsByPrice('€€')} />
            <ResultsList title='Fucking Expensive' results={filterResultsByPrice('€€€')}/>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen