import AppRouter from './Router/Router'
import axios from 'axios'
import './App.css';
import {createContext ,useEffect, useState} from 'react'

export const AuthContext = createContext();




function App() {
const [auth, setAuth] = useState(localStorage.getItem('Token'))
useEffect(()=>{
  axios.get('https://sahinblog.herokuapp.com/auth/user',{
    headers:{
      'Authorization': `Token ${auth}`
    }
  }).
  then((a)=> console.log(a.data))
}, [auth])


  return (
    <AuthContext.Provider value={{auth, setAuth}} >
    <AppRouter />
   </AuthContext.Provider>
  );
}

export default App;
