import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import HomePage from './pages/homePage/HomePage';
import MessagePage from './pages/messagePage/MessagePage';
import InterestingPage from './pages/interestingPage/InterestingPage';
import { useState } from 'react';
import PrivatRoute from './components/routes/PrivatRoute';
import PublicRoute from './components/routes/PublicRoute';

function App() {

  const [isAuth, setAuth] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PrivatRoute isAuth={isAuth}> <HomePage /> </PrivatRoute>} />
        <Route path='/login' element={<PublicRoute isAuth={isAuth}><LoginPage /></PublicRoute>} />
        <Route path='/chat' element={<PrivatRoute isAuth={isAuth}> <MessagePage /> </PrivatRoute>} />
        <Route path='/interesting' element={<InterestingPage />} />
      </Routes>
    </div>
  );
}

export default App;
