import 'expo-dev-client';
import { useEffect, useState, useRef} from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import {setPermission} from "./utils/healthSteps"
import {getWeatherData} from "./utils/weather"
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from "./screens/Home";
import WeatherScreen from "./screens/Weather";
import StepsScreen from "./screens/Steps";
import SetGoalScreen from "./screens/SetGoal";
import {useTheme} from "@react-native-material/core";
import Lottie from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 function App(props) {
  const animationRef = useRef(null);
  useEffect(()=>{    
    // add delay to show splash animation
    setTimeout(()=>{
      setIsReady(true);
      setPermission();
      getWeatherData();
    }, 5000);

  }, []);
  const [isReady, setIsReady] = useState(false);
  const theme = useTheme();

  const Stack = createNativeStackNavigator();

  
  return (
    <Provider store={store}>
      {/* show splash animation */}
      {!isReady && <View style={styles.splash}>
        <Lottie autoPlay
          ref={animationRef}
          source={require('./assets/splash.json')}
        />
        </View>}

      {/* show content */}
      {isReady && <>
        <SafeAreaView style={{backgroundColor:theme?.palette?.primary?.main}}></SafeAreaView>
      </>}

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="steps"  options={{ title: 'Steps History' }} component={StepsScreen} />
        <Stack.Screen name="weather"  options={{ title: 'Weather' }} component={WeatherScreen} />
        <Stack.Screen name="setgoal"  options={{ title: 'Set Goal' }} component={SetGoalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  splash: {
    width: "100%",
    height:"100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
});


export default App