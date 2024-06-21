import React from 'react'
import { routes } from './utils/routes'
import { Link } from 'react-router-dom'
import { useUserStates } from './utils/global.context';
import Button from '../Components/Button';

const Navbar = () => {
  const { state, dispatch } = useUserStates();

  const handleThemeToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>

      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>

      <Link to={routes.fav}>
        <h4>Favoritos</h4>
      </Link>

      <Button onClick={handleThemeToggle} className='fav-button' title='Change theme'>{state.darkMode ? '💡' : '🌘'} </Button>
    </nav>
  )
}

export default Navbar