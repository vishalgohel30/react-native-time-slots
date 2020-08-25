import moment from 'moment';
import { AsyncStorage } from 'react-native';

export const CreateTimeSlots = (fromTime, toTime) => {
    let startTime = moment(fromTime, 'hh:mm A');
    let endTime = moment(toTime, 'hh:mm A');
    if (endTime.isBefore(startTime)) {
        endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
        arr.push(new moment(startTime).format('hh:mm A'));
        startTime.add(1, 'hours')
    }
    console.log(arr)
    return (arr || []).map((a, b) => ({ id: b + 1, time: a, form: { fname: '', lname: '', phone: '' } }));
}


// asynStorage setData
export const setData = async (List) => {
    try {
        await AsyncStorage.setItem(
            'TimeSlotsList',
            JSON.stringify(List),
        );
    } catch (error) {
        // Error saving data
    }
};

// asynStorage getData
export const getData = async () => {
    try {
        return JSON.parse((await AsyncStorage.getItem('TimeSlotsList') || []))
    } catch (error) {
        // Error retrieving data
    }
};
