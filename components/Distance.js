import { Text, View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Stack} from "@react-native-material/core";
import CurveBox from "./CurveBox"

const Distance = () => {
  const { distance } = useSelector((state) => state.distance);

  return (
    <CurveBox>
        <Stack spacing={5}>
        <Text>Distance for last 7 days</Text>
        {distance.map((item, index)=>{
            return (
            <Text key={`i${index}`}>{moment(item.startDate).format("DD/MM/yyyy")} : {item.value} meter</Text>)
        })}
        </Stack>
    </CurveBox>
  );
};

const styles = StyleSheet.create({

});

export default Distance;