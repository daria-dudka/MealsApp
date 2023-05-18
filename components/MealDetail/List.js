import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../utils/colors';

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.accent100,
  },
  itemText: {
    color: Colors.primary700,
    textAlign: 'center',
  },
});
