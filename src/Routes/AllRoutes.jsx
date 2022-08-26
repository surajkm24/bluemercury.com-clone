import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { LoginPage } from './LoginPage';

export const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/login' element={<LoginPage/>}/>
    </Routes>
}