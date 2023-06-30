import React from 'react'; 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { layoutConfig } from './config/layout-config';
import { useEffect, useState } from 'react';
import { RouteType } from '../src/model/RouteType';
import { useSelector, useDispatch } from 'react-redux';

import { NavigatorDispatch } from './components/navigators/NavigatorDispatch';


import { Home } from './components/pages/Home';
import { Yad2 } from './components/pages/Yad2';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { About } from './components/pages/About';




function App() {
  const dispatch = useDispatch<any>();
  const [routes, setRoutes] = useState<RouteType[]>([]);
  const authUser:string = useSelector<any,string>(state=>state.auth.authenticated );
  useEffect(()=> {
      function getRoutes(): RouteType[] {
          const logoutRoute: RouteType |undefined = layoutConfig.routes
          .find(r => r.path.includes('logout'))
          logoutRoute!.label = authUser;
          return layoutConfig.routes.filter(r => (!authUser && !r.flAuth ) ||
          (authUser.includes('admin') && r.flAdmin) ||
          (authUser && !r.flAuth && !r.flAdmin ))
      }
      setRoutes(getRoutes());
  }, [authUser]);

return <BrowserRouter>
    <Routes>
        <Route path='/' element={<NavigatorDispatch 
         routes={routes}  />}>
            <Route index element={<Home/>}/>          
            <Route path='Yad2' element={<Yad2/>}/> 
            <Route path='About' element={<About/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='logout' element={<Logout/>}/>
            
            
        </Route>
            
    </Routes>
</BrowserRouter>

}
export default App;
