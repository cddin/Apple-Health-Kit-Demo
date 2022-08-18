import { View, StyleSheet} from 'react-native';

const CurveBox = ({children}) => {

  return (
    <View style={styles.container}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderColor: '#aeaeae',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10, padding: 10
    }
});

export default CurveBox;