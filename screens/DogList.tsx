import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {getDogListAction, IDogItem} from "../actions/dogsActions";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import DogItem from "../components/DogItem";
import styled from 'styled-components/native';
import ImageModal from "../components/ImageModal";

const DogList = ({getDogList, dogList, isLoading, error}) => {
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

    if(error)
        return (
            <FlexCenterWrapper>
                <ErrorText>
                    Oops! Fetching data failed
                </ErrorText>
            </FlexCenterWrapper>
        );

    if(isLoading)
        return (
            <FlexCenterWrapper>
                <ActivityIndicator size="large" color="#0000ff" />
            </FlexCenterWrapper>
        );

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

const FlexCenterWrapper = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ErrorText = styled.Text`
    color: red;
    font-size: 18px;
`;

const mapStateToProps = ({dogList, isLoading, error}) => ({
    dogList,
    isLoading,
    error
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getDogList: getDogListAction}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DogList);