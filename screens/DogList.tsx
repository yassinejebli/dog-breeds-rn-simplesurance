import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import {getDogListAction, IDogItem, IDogsActions} from "../actions/dogsActions";
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';
import DogItem from "../components/DogItem";
import styled from 'styled-components/native';

//TODO: Error/Loading handling
const DogList = ({getDogList, dogList}) => {
    useEffect(()=>{
        getDogList();
    }, []);

    return (
        <FlatList
            data={dogList}
            renderItem={({item}: {item: IDogItem}) => <DogItem {...item}/>}
            keyExtractor={(item: IDogItem) => item.name}
            ItemSeparatorComponent={()=><Separator />}
        />
    );
};

const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: #CED0CE;
`;

const mapStateToProps = (state) => ({
    dogList: state.dogList,
});

const mapDispatchToProps = (dispatch: Dispatch<IDogsActions>) => ({
    ...bindActionCreators({getDogList: getDogListAction}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DogList);