import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import {IDogItem} from "../actions/dogsActions";
import {connect} from 'react-redux';
import DogItem from "../components/DogItem";
import styled from 'styled-components/native';

const DogFavList = ({dogFavList}) => {
    return (
        <FlatList
            data={dogFavList}
            renderItem={({item}: {item: IDogItem}) => <DogItem dogItem={item}/>}
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
    dogFavList: state.dogList.filter(dogItem=>dogItem.isFav) // not good? maybe I should have created separated reducers/actions for fav list manipulation!!
});

export default connect(mapStateToProps)(DogFavList);