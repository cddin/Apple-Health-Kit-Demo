import { View} from 'react-native';
import { Button, Stack} from "@react-native-material/core";
import Distance from "../components/Distance";
import BasicContainer from "../components/BasicContainer";

const HomeScreen = ({ navigation }) => {
    return (
        <BasicContainer>
            <Stack spacing={20}>
                <View><Distance/></View>
                <View><Button  variant="outlined" title="Steps history" onPress={() => navigation.navigate('steps')}/></View>
                <View><Button  variant="outlined" title="Weather" onPress={() => navigation.navigate('weather')}/></View>
            </Stack>
        </BasicContainer>
    );
  };

  export default HomeScreen;