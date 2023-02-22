import * as React from 'react';

export type ContextProps = {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

export const FavouritesContext = React.createContext<ContextProps>({
  ids: [],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

const FavouritesContextProvider = ({children}: {children: React.ReactNode}) => {
  const [favouriteMealIds, setFavouriteMealIds] = React.useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteMealIds(currentFavId => [...currentFavId, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteMealIds(currentFavId =>
      currentFavId.filter(mealId => mealId !== id),
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
