import {useState, useEffect} from 'react'
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    
    // with 'async' we can use the await syntax inside this helper function
    const searchApi = async (searchTerm) => {
        console.log('How many times do I get called?')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'berlin'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
        // set found data to results with the help of setResults
        
    }

    // Call Searchapi when component is first rendered will result in infinite loop, to see if you put a console.log within the searchapi function!! BAD CODE!
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta')
    }, [])
    // searchApi('pasta')
    return [errorMessage, searchApi, results]
}