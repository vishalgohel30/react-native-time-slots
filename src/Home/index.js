import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { getData } from '../Utils';


const Home = ({ navigation }) => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        getCreateTimeSlots()
    }, []);

    const getCreateTimeSlots = async () => {
        setstate(await getData());
    }

    const handlePress = (a) => {
        navigation.navigate('Users', { userObj: a })
    }

    return (<View>
        {(state || []).map((a, index) => <Card key={index} onPress={() => { handlePress(a) }}>
            <Card.Content><Text >{a.time}</Text></Card.Content>
        </Card>)}
    </View>)
}
export default Home