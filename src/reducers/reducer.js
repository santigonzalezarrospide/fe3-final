export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return { ...state, fav: [...state.fav, action.payload] };
    case "DELETE_FAV":
      const filteredFav = state.fav.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, fav: filteredFav };
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error("No se pudo modificar el estado.");
  }
};