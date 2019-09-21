import React from 'react';
import {IDogItem, IDogsActions, toggleDogFavAction} from "../actions/dogsActions";
import styled from 'styled-components/native';
import StarNotFilledIcon from "./svg/StarNotFilled";
import StarFilledIcon from "./svg/StarFilled";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from 'react-redux';

const DogItem = ({name, isFav, toggleDogFav}: IDogItem&{toggleDogFav: Function}) => { //TODO: Fix Typing
    return (
        <Wrapper>
            <StyledText>{name}</StyledText>
            {isFav ? <StarFilledIcon onPress={() => {toggleDogFav({name, isFav})}} fill={'orange'} />
                :
                <StarNotFilledIcon onPress={() => {toggleDogFav({name, isFav})}} />
            }
        </Wrapper>
    );
};

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 16px;
`;

const StyledText = styled.Text`
    font-size: 20px;
    text-transform: uppercase;
`;

const mapDispatchToProps = (dispatch: Dispatch<IDogsActions>) => ({
    ...bindActionCreators({toggleDogFav: toggleDogFavAction}, dispatch)
});

export default connect(null, mapDispatchToProps)(DogItem);