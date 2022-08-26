import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';

export const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/login' element={<LoginPage/>}/>
        <Route path='/account/signup' element={<SignupPage/>}/>
    </Routes>
}