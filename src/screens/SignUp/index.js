import React, { useState } from 'react';
import { Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from '../../contexts/UserContext';

import { Container,
         InputArea,
         CustomButton,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold
} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textButton: {
        fontSize: 18,
        color: "#FFFFFF",
    },
     
});
    
export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);

            if(res.token) {               
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type:'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert("Erro: "+res.error);
            }

        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>

                <SignInput  
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput  
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                   
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />         

                <CustomButton onPress={handleSignClick}>
                   <Text style={styles.textButton}>Cadastar</Text> 
                </CustomButton>

            </InputArea>
                
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}