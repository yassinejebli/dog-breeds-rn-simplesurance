import React, { Component } from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

interface IImageModalProps{
    imageURL: string;
}

interface IImageModalFunctions{
    closeModal: () => void;
}

const ImageModal = ({imageURL, closeModal}: IImageModalProps&IImageModalFunctions) => {
    return (
        <Modal
            animationType="fade"
            transparent
            visible>
            <Wrapper>
                <CloseButtonWrapper onPress={closeModal}>
                    <CloseButtonText>x</CloseButtonText>
                </CloseButtonWrapper>
                <StyledImage source={{uri: imageURL}} />
            </Wrapper>
            <Overlay />
        </Modal>
    );
};

const Wrapper = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

const Overlay = styled.View`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;

const StyledImage = styled.Image`
    width: 300px;
    height: 300px;
    border-radius: 3px;
`;

const CloseButtonWrapper = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: black;
    margin-left: auto;
`;
//    align-self: flex-end;

const CloseButtonText = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
`;



export default ImageModal;