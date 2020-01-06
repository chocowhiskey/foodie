import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import axios from '../api/yelp'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    
    // with 'async' we can use the await syntax inside this helper function
    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'berlin'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
        // set found data to results with the help of setResults
        
    }

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi()}
        />
        <Text>Hello from Search SCreen</Text>
        <Text>{term}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen