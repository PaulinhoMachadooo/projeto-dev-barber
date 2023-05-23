import React, { useState } from "react";
import { styles} from "./style"
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
        Container,
        Scroller,
        
        HeaderArea,
        HeaderTitle,
        SearchButtom,

        LocationArea,
        LocationInput,
        LocationFinder,

} from "./style";


import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import { TextInput } from "react-native-gesture-handler";

export default () => {

    const navigation =  useNavigation();

    const [locationText, setLocationText] = useState('');

    return (
        <Container>
            <Scroller>

            <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre seu barbeiro favorito</HeaderTitle>
                    < SearchButtom onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButtom>
            </HeaderArea >

                <LocationArea>
                    <TextInput style={styles.locationInput} 
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <View style={styles.locationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </View>
                </LocationArea>

            </Scroller>
        </Container>
    );
}