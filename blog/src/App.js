import AppRouter from './Router/Router'
import axios from 'axios'
import './App.css';
import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

function App(props) {

  const session_token = localStorage.getItem('localToken');
  const [token, setToken] = useState(session_token);
  const [currentuser, setCurrentuser] = useState(null);

  useEffect(() => {
    axios.get('https://sahinblog.herokuapp.com/auth/user', {
      headers: {
        'Authorization': `Token ${token}`
      }
    }).
      then((res) => {
        setCurrentuser(res.data);
      }).
      catch((err) => console.log(err))
  }, [token])


  console.log('currentuser appjs', currentuser)
  console.log('token appjs', token)

  return (
    <AuthContext.Provider value={{ token, setToken, currentuser, setCurrentuser }} >
      <AppRouter />
    </AuthContext.Provider>
  );
}
export default App;
