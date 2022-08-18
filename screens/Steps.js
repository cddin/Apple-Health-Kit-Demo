import { useState, useEffect} from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import { Button, Stack} from "@react-native-material/core";
import Steps from "../components/Steps";
import BasicContainer from "../components/BasicContainer";

const Stepscreen = ({ navigation, route }) => {

    useEffect(()=>{
        readData();
    },[]);

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
            readData();
          });
          return unsubscribe;
    },[navigation])

    const [txt, setTxt] = useState("0");

    const readData = async ()=>{
        try {
            const value = await AsyncStorage.getItem('@goal');
            setTxt(value);
        } catch (e) {
            console.log(e);
            setTxt(0);
        }
    }

    return(
    <BasicContainer>
        <Stack spacing={20}>
            <Text>{`Your daily step goal is ${txt??0} steps`}</Text>
        <View><Steps/></View>
        <View><Button  variant="outlined" title="Set Daily Goal" onPress={() => navigation.navigate('setgoal')}/></View>
        </Stack>
    </BasicContainer>
    );
  };

  export default Stepscreen;