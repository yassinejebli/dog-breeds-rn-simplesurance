import React  from 'react';
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
                <CloseButton onPress={closeModal}>
                    <CloseButtonText>x</CloseButtonText>
                </CloseButton>
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
    border-radius: 6px;
    background-color: #eeeeee;
`;

const CloseButton = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: #2196F3;
    margin-left: auto;
    border-radius: 24px;
    margin-bottom: -16px;
    margin-right: -16px;
    z-index: 2;
`;
//    align-self: flex-end;

const CloseButtonText = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
`;



export default ImageModal;