import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={item.title}
        imageUrl={item.imageUrl}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoryItem(item)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
