import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { getData, setData } from '../Utils';

const Users = ({ route, navigation }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState([]);
    const { userObj } = route.params;


    useEffect(() => {
        getCreateTimeSlots();
    }, []);

    const getCreateTimeSlots = async () => {
        let data = await getData();
        setState(data);
        let match = (data || []).find((a) => a.id == userObj.id);
        if (match) {
            setFname(match.form.fname);
            setLname(match.form.lname);
            setPhone(match.form.phone);
        }
    }


    const handleSave = async () => {
        let match = state.find((a) => a.id == userObj.id)
        if (match) {
            match.form.fname = fname
            match.form.lname = lname
            match.form.phone = phone
        }
        await setData(state);
        navigation.goBack();
    }

    return <View>
        <TextInput
            label="First Name"
            style={{margin:10}}
            value={fname}
            onChangeText={text => setFname(text)}
        />
        <TextInput
            label="Last Name"
            style={{margin:10}}
            value={lname}
            onChangeText={text => setLname(text)}
        />
        <TextInput
            label="Phone"
            style={{margin:10}}
            value={phone}
            onChangeText={text => setPhone(text)}
        />
        <Button mode="contained"
        style={{margin:10}}
         onPress={handleSave}>
            Save
  </Button>
        <Button
        style={{margin:10}} mode="contained" onPress={() => navigation.goBack()}>
            
            Cancel
  </Button>
    </View>
}

export default Users;