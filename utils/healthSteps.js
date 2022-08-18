import AppleHealthKit from 'react-native-health';

  import moment from 'moment';
  import {store} from '../store';
  import { setSteps } from '../actions/steps';
  import { setDistance} from '../actions/distance';

const setPermission = () =>{
    const permissions = {
        permissions: {
          read: [AppleHealthKit.Constants.Permissions.Steps, AppleHealthKit.Constants.Permissions.DistanceWalkingRunning],
          write: [AppleHealthKit.Constants.Permissions.Steps],
        },
      };
      
      AppleHealthKit.initHealthKit(permissions, (error) => {
        if (error) {
        //   Alert.alert(
        //     "Error",
        //     "'[ERROR] Cannot grant permissions!'",
        //     [
        //       {
        //         text: "Cancel",
        //         onPress: () => console.log("Cancel Pressed"),
        //         style: "cancel"
        //       },
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        //   );
          console.log('[ERROR] Cannot grant permissions!')
        }else{
            getData();
        }
      });
};

const getData = () => {

    const options = {
        // get 7 days before
        startDate:  moment().subtract(7,'d').toDate().toISOString(),
        includeManuallyAdded: true,
    }

    AppleHealthKit.getDailyStepCountSamples(
        options,
        (callbackError, results) => {
            if(results){
                store.dispatch(setSteps(results))
            }
            if(callbackError){
                console.log("callbackError", callbackError);
            }
        },
    )

    AppleHealthKit.getDailyDistanceWalkingRunningSamples(
        options,
        (callbackError, results) => {
            if(results){
                store.dispatch(setDistance(results))
            }
            if(callbackError){
                console.log("callbackError", callbackError);
            }
        },
    )

    

}
module.exports = {
    setPermission,
    getData
}