import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../utils/colors';

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
  subtitle: {
    color: Colors.accent500,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
