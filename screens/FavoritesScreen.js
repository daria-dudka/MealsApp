import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';
import FavoritesContext from '../context/favorites-context';
import Colors from '../utils/colors';

const FavoritesScreen = () => {
  const favoritesCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesCtx.favoritesIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Favorites list is empty</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.primary700,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
