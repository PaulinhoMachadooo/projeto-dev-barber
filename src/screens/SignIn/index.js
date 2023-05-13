import React from 'react';
import { Text, TextInput } from 'react-native';
import { Container,
         InputArea,
         CustomButton,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textButton: {
        fontSize: 18,
        color: "#FFFFFF",
    },
});
    



export default () => {
    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>

                <SignInput />
                   
                <SignInput />
                    
             

                <CustomButton>
                   <Text style={styles.textButton}>Login</Text> 
                </CustomButton>


            </InputArea>
                
           

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}