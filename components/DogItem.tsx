import React from 'react';
import {IDogItem} from "../actions/dogsActions";
import styled from 'styled-components/native';
import StarNotFilledIcon from "../assets/StarNotFilled";
import StarFilledIcon from "../assets/StarFilled";


const DogItem = ({name, isFav}: IDogItem) => {
    return (
        <Wrapper>
            <StyledText>{name}</StyledText>
            {isFav ? <StarFilledIcon fill={'orange'} /> : <StarNotFilledIcon />}
        </Wrapper>
    );
};

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 22px 16px;
`;

const StyledText = styled.Text`
    font-size: 20px;
    text-transform: uppercase;
`;

export default DogItem;