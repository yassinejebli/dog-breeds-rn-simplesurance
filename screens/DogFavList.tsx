import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {getDogFavListAction, IDogItem, IDogsActions} from "../actions/dogsActions";
import {connect} from 'react-redux';
import DogItem from "../components/DogItem";
import styled from 'styled-components/native';
import {bindActionCreators, Dispatch} from "redux";

const DogFavList = ({getDogFavList, dogFavList}) => {
    useEffect(()=>{
        getDogFavList();
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={dogFavList}
                renderItem={({item}: {item: IDogItem}) => <DogItem dogItem={item}/>}
                keyExtractor={(item: IDogItem) => item.name}
                ItemSeparatorComponent={()=><Separator />}
            />
        </SafeAreaView>
    );
};

const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: #CED0CE;
`;

const mapStateToProps = (state) => ({
    dogFavList: state.dogFavList
});

const mapDispatchToProps = (dispatch: Dispatch<IDogsActions>) => ({
    ...bindActionCreators({getDogFavList: getDogFavListAction}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DogFavList);