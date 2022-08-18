import {useEffect, useState} from "react"
import { StyleSheet, View, Text, TextInput, AsyncStorage} from 'react-native';
import { Button, Stack} from "@react-native-material/core";
import BasicContainer from "../components/BasicContainer";

const SetGoalScreen = ({ navigation, route }) => {

    useEffect(()=>{
        const readData = async ()=>{
            try {
                const value = await AsyncStorage.getItem('@goal');
                setTxt(value);
            } catch (e) {
                setTxt(0);
            }
        }
        readData();
    },[]);

    const [txt, setTxt] = useState("0");

    const onChangeHandler = (val) =>{
        setTxt(val.replace(/[^0-9]/g, ''));
    }

    const onSetHandler = async() => {
        try {
            await AsyncStorage.setItem('@goal', txt)
        } catch (e) {
            // saving error
        }
        navigation.navigate('steps')
    }

    return(
    <BasicContainer>
        <Stack spacing={20}>
            <Text>Set Goal (Steps)</Text>
            <TextInput style={styles.txtInput}
                onChangeText={onChangeHandler}
                value={txt}
            />
            <View><Button title="Set" onPress={onSetHandler}/></View>
        </Stack>
        
    </BasicContainer>
    );
  };

  const styles = StyleSheet.create({
    txtInput: {
      color: "#000000",
      fontSize: 20,
      borderColor: '#aeaeae',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10, padding: 10
    }
  });

  export default SetGoalScreen;