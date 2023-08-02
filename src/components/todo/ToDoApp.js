import "./ToDoApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './HeaderComponent.js'
import LoginComponent from './LoginComponent.js';
import WelcomeComponent from './WelcomeComponent.js';
import ListToDosComponent from './ListToDosComponent.js';
import LogoutComponent from './LogoutComponent.js';
import ErrorComponent from './ErrorComponent.js';
import FooterComponent from './FooterComponent.js';

function ToDoApp() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />

                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListToDosComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent />}></Route>

                    <Route path='/*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent />
        </div>
    )
}


export default ToDoApp;