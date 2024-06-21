import React from 'react'
import Card from '../Components/Card'
import { useUserStates } from '../Components/utils/global.context';
import Button from '../Components/Button';

const Home = () => {

  const { state, dispatch } = useUserStates();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((user) => (
          <Card item={user} key={user.id}>
            <Button className='fav-button' onClick={() => dispatch({ type: "ADD_FAV", payload: user })} title="Add Fav">⭐</Button>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default Home