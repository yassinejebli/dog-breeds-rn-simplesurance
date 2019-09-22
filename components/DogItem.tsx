import React from 'react';
import {TouchableWithoutFeedback} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {IDogItem, toggleDogFavAction} from "../actions/dogsActions";
import styled from 'styled-components/native';
import StarNotFilledIcon from "./svg/StarNotFilled";
import StarFilledIcon from "./svg/StarFilled";
import {getDogImageURLByName} from "../api/dogsAPI";

interface IDogItemProps{
    dogItem: IDogItem;
}

interface IDogItemFunctions{
    toggleDogFav: (dogItem: IDogItem)=>void;
    openImageModalHandler: (url:string)=>void;
}

const DogItem = ({dogItem, toggleDogFav, openImageModalHandler}: IDogItemProps&IDogItemFunctions) => {
    return (
        <TouchableWithoutFeedback onPress={()=>getDogImageURLByName(dogItem.name).then(url=>openImageModalHandler(url))}>
            <Wrapper>
                <StyledText>{dogItem.name}</StyledText>
                <ClickableFavIcon onPress={() => {toggleDogFav(dogItem)}}>
                    {dogItem.isFav ? <StarFilledIcon fill={'orange'} />
                        :
                        <StarNotFilledIcon />
                    }
                </ClickableFavIcon>
            </Wrapper>
        </TouchableWithoutFeedback>
    );
};

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 16px;
`;

const StyledText = styled.Text`
    font-size: 16px;
    text-transform: uppercase;
`;

const ClickableFavIcon = styled.TouchableOpacity`
    padding: 8px; // increase the clickable area
`;

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({toggleDogFav: toggleDogFavAction}, dispatch)
});

export default connect(null, mapDispatchToProps)(DogItem);