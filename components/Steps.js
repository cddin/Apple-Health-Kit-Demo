import { Text, View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Stack} from "@react-native-material/core";
import CurveBox from "./CurveBox";

const Steps = () => {
  const { steps } = useSelector((state) => state.steps);

  return (
    <CurveBox>
        <Stack spacing={5}>
        <Text>Steps for last 7 days</Text>
        {steps.map((item, index)=>{
            return (
            <Text key={`i${index}`}>{moment(item.startDate).format("DD/MM/yyyy")} : {item.value} steps</Text>)
        })}
        </Stack>
    </CurveBox>
  );
};

const styles = StyleSheet.create({
});

export default Steps;