import React from 'react'
import { StyleSheet } from 'react-native'
import Gallery from 'react-native-image-gallery';

export default function index() {
    return (
        <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={[
                //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
                { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' }, useAnimatedDriver: true, },
                { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
            ]}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});