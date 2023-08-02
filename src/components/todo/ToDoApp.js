import "./ToDoApp.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from './HeaderComponent.js'
import LoginComponent from './LoginComponent.js';
import WelcomeComponent from './WelcomeComponent.js';
import ListToDosComponent from './ListToDosComponent.js';
import LogoutComponent from './LogoutComponent.js';
import ErrorComponent from './ErrorComponent.js';
import FooterComponent from './FooterComponent.js';
import AuthProvider, { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    console.log(authContext)
    if (authContext.isAuthenticated) {
        return children
    }

    return <Navigate to='/' />
}

function ToDoApp() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />

                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListToDosComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>}
                        ></Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/*' element={<ErrorComponent />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>

            <FooterComponent />
        </div>
    )
}


export default ToDoApp;