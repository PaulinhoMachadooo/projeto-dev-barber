import React from "react";
import styled from 'styled-components/native';
import { StyleSheet } from "react-native/";

const InputArea = styled.View`
    width: 100%;
    heigth: 90px;
    background-color: #83D6E3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const styles = StyleSheet.create({
    input: {
       height:60,
    },
 
});
const Input = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        
        <InputArea style={styles.input}>
                
                <IconSvg  width="24" heigth="24"  fill="#268596"/>
                <Input 
                    placeholder={placeholder}
                    placeholderTextColor="#268596"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                />
           
        </InputArea>
        
    );
}