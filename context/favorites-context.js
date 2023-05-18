import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favoritesIds: [],
  addFavorite: (mealId) => {},
  removeFavorite: (mealId) => {},
  itemIsFavorite: (mealId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(mealId) {
    setUserFavorites((currentUserFavorites) => [
      ...currentUserFavorites,
      mealId,
    ]);
  }

  function removeFavoriteHandler(mealId) {
    setUserFavorites((currentUserFavorites) => {
      return currentUserFavorites.filter((id) => id !== mealId);
    });
  }

  function itemIsFavoriteHandler(mealId) {
    return userFavorites.some((id) => id === mealId);
  }

  const context = {
    favoritesIds: userFavorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
