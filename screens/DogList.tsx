import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import {getDogBreeds} from "../api/API";

const DogList = () => {
    const [dogBreeds, setDogBreeds] = useState([]);

    useEffect(()=>{
        getDogBreeds().then((result:Array<string>)=>setDogBreeds(result));
    }, []);

    return (
        <View>
            <FlatList
                data={dogBreeds}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={item => item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default DogList;