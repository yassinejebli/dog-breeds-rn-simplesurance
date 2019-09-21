import React from 'react';
import {TouchableWithoutFeedback} from "react-native";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from 'react-redux';
import {IDogItem, IDogsActions, toggleDogFavAction} from "../actions/dogsActions";
import styled from 'styled-components/native';
import StarNotFilledIcon from "./svg/StarNotFilled";
import StarFilledIcon from "./svg/StarFilled";
import {getDogImageURLByName} from "../api/DogsAPI";

const DogItem = ({name, isFav, toggleDogFav, openImageModalHandler}: IDogItem&{toggleDogFav: Function, openImageModalHandler: Function}) => { //TODO: Fix Typing
    return (
        <TouchableWithoutFeedback onPress={()=>getDogImageURLByName(name).then(url=>openImageModalHandler(url))}>
            <Wrapper>
                <StyledText>{name}</StyledText>
                {isFav ? <StarFilledIcon onPress={() => {toggleDogFav({name, isFav})}} fill={'orange'} />
                    :
                    <StarNotFilledIcon onPress={() => {toggleDogFav({name, isFav})}} />
                }
            </Wrapper>
        </TouchableWithoutFeedback>
    );
};

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 16px;
`;

const StyledText = styled.Text`
    font-size: 16px;
    text-transform: uppercase;
`;

const mapDispatchToProps = (dispatch: Dispatch<IDogsActions>) => ({
    ...bindActionCreators({toggleDogFav: toggleDogFavAction}, dispatch)
});

export default connect(null, mapDispatchToProps)(DogItem);