import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

//PAGES
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import MoviePage from './Pages/MoviePage';

function App() {
  return (
    <Fragment>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage ></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/dashboard' element={<DashboardPage></DashboardPage>}></Route>
        </Routes>
      </BrowserRouter>
      </div>

    </Fragment>
      
    
  );
}

export default App;
