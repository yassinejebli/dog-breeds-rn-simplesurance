import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {IDogItem} from "../actions/dogActions";
import {connect} from 'react-redux';
import DogItem from "../components/DogItem";
import styled from 'styled-components/native';
import ImageModal from "../components/ImageModal";

const DogFavList = ({dogFavList}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imageURLModal, setImageURLModal] = useState();

    const toggleImageModal = () => setModalIsOpen(!modalIsOpen);

    const openImageModal = (imageURL: string) => {
        setImageURLModal(imageURL);
        toggleImageModal();
    };

    return (
        <View>
            {modalIsOpen&&imageURLModal&&<ImageModal imageURL={imageURLModal} closeModal={toggleImageModal} />}
            <FlatList
                data={dogFavList}
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
    dogFavList: state.dogFavList
});

export default connect(mapStateToProps)(DogFavList);