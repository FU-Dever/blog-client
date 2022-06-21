import React, { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorPage } from './common/error-page/errorPage';
import { login } from './config/service/loggerService';
import Home from './views/home/home';
import Login from './views/logger/log-in/login';
import Register from './views/logger/sign-up/register';

export const UserInforContext = React.createContext();
function App() {

  const [username, setUserName] = useState("");
  useEffect(() => {
    login()
  }, [username]);

  return (
    <UserInforContext.Provider value={{username, setUserName}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home username={username}/>} />
          <Route exact path="/home/*" element={<ErrorPage />} />
          <Route exact path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </UserInforContext.Provider>
  );
}

export default App;
