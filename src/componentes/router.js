import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Espanol from './espanol';
import Ingles from './ingles';
import Error from './error';
import App from './../App';

const Router = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route  path='en' element={<Ingles />} />
            <Route  path='es' element={<Espanol />} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router;