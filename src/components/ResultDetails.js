import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native'

const ResultDetails = ({ result }) => {
        return <View>
            <Image source={{ uri: result.image_url }} style={styles.image}/> 
            <Text>{result.name}</Text>
        </View>
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 150,
        borderRadius: 4
    }
})

export default ResultDetails