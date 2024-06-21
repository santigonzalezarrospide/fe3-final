import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const ContextGlobal = createContext();

const lsFav = JSON.parse(localStorage.getItem("fav")) || [];

const initialState = {
  darkMode: false,
  data: [],
  fav: lsFav,
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);


  const url = "https://jsonplaceholder.typicode.com/users";
  

  useEffect(() => {
    axios(url)
      .then((res) =>
        dispatch({ type: "GET_USERS", payload: res.data })
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(state.fav));
  }, [state.fav]);


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useUserStates = () => {
  return useContext(ContextGlobal);
};