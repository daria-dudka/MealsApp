import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect, useContext } from 'react';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import FavoritesContext from '../context/favorites-context';
import Colors from '../utils/colors';

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const favoritesCtx = useContext(FavoritesContext);
  const isItemFavorite = favoritesCtx.itemIsFavorite(mealId);

  function changeFavoriteStatusHandler() {
    isItemFavorite
      ? favoritesCtx.removeFavorite(mealId)
      : favoritesCtx.addFavorite(mealId);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isItemFavorite ? 'star' : 'star-outline'}
            color='white'
            size={24}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [selectedMeal, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        style={styles.detailStyle}
        textStyle={styles.detailText}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 45,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: Colors.primary700,
  },
  detailStyle: {},
  detailText: {
    color: Colors.primary700,
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '90%',
  },
});
