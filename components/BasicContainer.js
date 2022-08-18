import { View, StyleSheet} from 'react-native';

const BasicContainer = ({children}) => {

  return (
    <View style={styles.container}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20
    }
});

export default BasicContainer;