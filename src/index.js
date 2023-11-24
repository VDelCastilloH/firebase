import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import LoginView from './routes/loginView';
import DashboardView from './routes/dashboardview';
import EditProfileView from './routes/editprofileview';
import SingOutView from './routes/singoutview';
import PublicProfileView from './routes/publicprofileview';
import ChooseUsernameView from './routes/chooseusernameview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/login' element={<LoginView/>}/>
      <Route path='/dashboard' element={<DashboardView/>}/>
      <Route path='/dashboard/profile' element={<EditProfileView/>}/>
      <Route path='/singout' element={<SingOutView/>}/>
      <Route path='u/:username' element={<PublicProfileView/>}/>
      <Route path='choose-username' element={<ChooseUsernameView/>}/>
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
