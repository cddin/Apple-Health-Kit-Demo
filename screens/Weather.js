import { View} from 'react-native';
import Weather from "../components/Weather";
import BasicContainer from "../components/BasicContainer";

const Weathercreen = ({ navigation, route }) => {
    return(
    <BasicContainer>
        <Weather/>
    </BasicContainer>
    );
  };

  export default Weathercreen;