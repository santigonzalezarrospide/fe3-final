import React from "react";
import Card from "../Components/Card";
import { useUserStates } from "../Components/utils/global.context";
import Button from "../Components/Button";

const Favs = () => {
  const { state, dispatch } = useUserStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.fav.map((favorito) => (
          <Card item={favorito} key={favorito.id}>
            <Button className='fav-button' onClick={() => dispatch({ type: "DELETE_FAV", payload: favorito })}>
              ❌
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Favs;
