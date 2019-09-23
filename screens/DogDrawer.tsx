import React, {useRef} from 'react';
import SignatureCapture from 'react-native-signature-capture';
import styled from 'styled-components/native';
import {View} from "react-native";

const DogDrawer = () => {
    const drawerRef = useRef(null);
    return (
        <View style={{flex:1}}>
            <SignatureCapture
                style={[{flex:0.95}]}
                ref={drawerRef}
                showNativeButtons={false}
                showTitleLabel={false}
                viewMode={"portrait"} />
            <ButtonWrapper>
                <StyledButton onPress={()=>drawerRef.current.resetImage()} >
                    <StyledText>Reset</StyledText>
                </StyledButton>
            </ButtonWrapper>
        </View>

    );
};

const ButtonWrapper = styled.View`
    display: flex;
    align-items: center;
    margin-top: 16px;
`;

const StyledButton = styled.TouchableHighlight`
    background-color: #2196F3;
    padding: 16px 46px;
`;

const StyledText = styled.Text`
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    
`;

export default DogDrawer;