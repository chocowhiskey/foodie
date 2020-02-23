import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
        />
        <Text>{term}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We found {results.length} results</Text>
        <ResultsList title='Cost Effective' results={filterResultsByPrice('€')} />
        <ResultsList title='Bit Pricier' results={filterResultsByPrice('€€')} />
        <ResultsList title='Fucking Expensive' results={filterResultsByPrice('€€€')}/>

    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen