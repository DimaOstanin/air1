import React from 'react'; 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { layoutConfig } from './config/layout-config';
import { useEffect, useState } from 'react';
import { RouteType } from '../src/model/RouteType';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavigatorDispatch } from './components/navigators/NavigatorDispatch';

import { ProductPage } from './components/pages/ProductPage';
import { Home } from './components/pages/Home';
import { Yad2 } from './components/pages/Yad2';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { About } from './components/pages/About';
import { NoFoundPAge } from './components/pages/NoFoundPage';
import { Generation } from './components/pages/Generation';
import {Subscription} from 'rxjs';
import { codeActions } from './redux/codeSlice';
import { goodsActions, setGoods } from './redux/goodsSlice';
import { goodsBox } from './redux/goodsSlice';
import { GoodsType } from './model/GoodsType';
import { GoodsForm } from './components/forms/GoodsForm';


function App() {
  const dispatch = useDispatch<any>();
  const [routes, setRoutes] = useState<RouteType[]>([]);
  const authUser:string = useSelector<any,string>(state=>state.auth.authenticated );
  useEffect(()=> {
      function getRoutes(): RouteType[] {
          const logoutRoute: RouteType |undefined = layoutConfig.routes
          .find(r => r.path.includes('logout'))
          logoutRoute!.label = authUser;
          console.log(authUser)
          return layoutConfig.routes.filter(r => (authUser && r && !r.flAuth ) || (!authUser && r && r.flAuth)   )
        //  return layoutConfig.routes;
      }
      setRoutes(getRoutes());
  }, [authUser]);
  useEffect(() => {
    let subscription: Subscription;
    if(authUser) {
         subscription = goodsBox.getAllGoods().subscribe({
            next: (employees: GoodsType[]) => {
                dispatch(setGoods(employees));
            },
            error: (err: any) => {
                dispatch(codeActions.setCode("Unknown Error"))
            }
         })
    }
    return () => {
        subscription && subscription.unsubscribe();
        console.log("unsubscribing");
    };
  
},[authUser])

return <BrowserRouter>
    <Routes>
        <Route path='/' element={<NavigatorDispatch 
         routes={routes}  />}>
            <Route index element={<Home/>}/>          
            <Route path='Yad2' element={<Yad2/>}/> 
            <Route path='Yad2/:id/' element={<ProductPage/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='logout' element={<Logout/>}/>
            <Route path='logout' element={<Logout/>}/>
            <Route path='create' element={<GoodsForm onAdd={(goodss) => {dispatch(goodsActions.addGoods(goodss));return true }} />}/>
            <Route path='Generate' element={<Generation/>}/>
            
            <Route path='*' element={<NoFoundPAge />}/>
        </Route>
            
    </Routes>
</BrowserRouter>

}
export default App;
