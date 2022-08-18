
import { Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import CurveBox from "./CurveBox";
import { ActivityIndicator } from "@react-native-material/core";

const Weather = () => { 
    const { weather, isLoading } = useSelector((state) => state.weather);
    return (
        <CurveBox>
            {isLoading && <ActivityIndicator size="large" />}

            {!isLoading && <>
                <Text>Todays weather</Text>
                <Text>{weather.name}, {weather.country}</Text>
                <Text>{weather?.description}</Text>
                <Text></Text>
                <Text>Wind : {weather?.wind} m/s</Text>
                <Text>Tempature: {weather?.temp} °C</Text>
            </>}
        </CurveBox>
    );
};

const styles = StyleSheet.create({
  });

export default Weather;