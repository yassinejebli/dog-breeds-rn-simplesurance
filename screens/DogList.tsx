import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import {getDogListAction, IDogItem, IDogsActions} from "../actions/dogsActions";
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';

const DogList = ({getDogList, dogList}) => {
    useEffect(()=>{
        getDogList();
    }, []);

    return (
        <View>
            <FlatList
                data={dogList}
                renderItem={({item}: {item: IDogItem}) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={(item: IDogItem) => item.name}
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

const mapStateToProps = (state) => ({
    dogList: state.dogList,
});

const mapDispatchToProps = (dispatch: Dispatch<IDogsActions>) => ({
    ...bindActionCreators({getDogList: getDogListAction}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DogList);