import React from 'react';
import {TouchableWithoutFeedback} from "react-native";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from 'react-redux';
import {IDogItem, IDogsActions, toggleDogFavAction} from "../actions/dogsActions";
import styled from 'styled-components/native';
import StarNotFilledIcon from "./svg/StarNotFilled";
import StarFilledIcon from "./svg/StarFilled";
import {getDogImageURLByName} from "../api/DogsAPI";

interface IDogItemProps{
    dogItem: IDogItem;
}

//TODO: Typing
interface IDogItemFunctions{
    toggleDogFav: (dogItem: IDogItem)=>void;
    openImageModalHandler: (url:string)=>void;
}

const DogItem = ({dogItem, toggleDogFav, openImageModalHandler}: IDogItemProps&IDogItemFunctions) => {
    return (
        <TouchableWithoutFeedback onPress={()=>getDogImageURLByName(dogItem.name).then(url=>openImageModalHandler(url))}>
            <Wrapper>
                <StyledText>{dogItem.name}</StyledText>
                {dogItem.isFav ? <StarFilledIcon onPress={() => {toggleDogFav(dogItem)}} fill={'orange'} />
                    :
                    <StarNotFilledIcon onPress={() => {toggleDogFav(dogItem)}} />
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