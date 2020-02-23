import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native'

const ResultDetails = ({ result }) => {
        return <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image}/> 
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 13
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 3
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 3
    }
})

export default ResultDetails