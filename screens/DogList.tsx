import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getDogListAction, IDogItem} from "../actions/dogsActions";
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';
import DogItem from "../components/DogItem";
import styled from 'styled-components/native';
import ImageModal from "../components/ImageModal";

//TODO: Error/Loading handling
const DogList = ({getDogList, dogList}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imageURLModal, setImageURLModal] = useState();

    const toggleImageModal = () => setModalIsOpen(!modalIsOpen);

    const openImageModal = (imageURL: string) => {
        setImageURLModal(imageURL);
        toggleImageModal();
    };

    useEffect(()=>{
        getDogList();
    }, []);

    return (
        <View>
            {modalIsOpen&&imageURLModal&&<ImageModal imageURL={imageURLModal} closeModal={toggleImageModal} />}
            <FlatList
                data={dogList}
                renderItem={({item}: {item: IDogItem}) => <DogItem openImageModalHandler={openImageModal} dogItem={item}/>}
                keyExtractor={(item: IDogItem) => item.name}
                ItemSeparatorComponent={()=><Separator />}
            />
        </View>
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