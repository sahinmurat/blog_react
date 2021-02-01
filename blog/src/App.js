import AppRouter from './Router/Router'
import axios from 'axios'
import './App.css';
import { createContext, useContext, useEffect, useState } from 'react'


export const AuthContext = createContext();

function App(props) {
  const [token, setToken] = useState('')
  const [currentuser, setCurrentuser] = useState('')
  console.log('a',localStorage.getItem('Token'))

  console.log('currentuser', currentuser)
  console.log('token', token)
  return (
    <AuthContext.Provider value={{ token, setToken, currentuser, setCurrentuser }} >
      <AppRouter />
    </AuthContext.Provider>
  );
}
export default App;
