import "./ToDoApp.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";

function ToDoApp(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path = '/login' element={<LoginComponent/>}></Route>
                    <Route path = '/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path = '/*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState("admin")

    const [password, setPassword] = useState("")

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleLoginBtn(){
        if(username==="knightcube" && password==="pass1234"){
            console.log("success")
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }else{
            console.log("failed")
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return (
                <div>
                    Authenticated Successfully
                </div>
            )
        }
        return null
    }

    function ErrorMessageComponent(){
        if(showErrorMessage){
            return (
                <div>
                    Authentication Failed. Try again.
                </div>
            )
        }
    
        return null
        
    }

    return (
        <div className="Login">
            <div className="LoginForm">
              
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>

                <button type="button" name="login" onClick={handleLoginBtn}>Login  </button>
                
                {showSuccessMessage && <div>Authenticated Successfully</div>}
                {showErrorMessage && <div>Authentication Failed </div>}
            </div>
        </div>
    )
}

function WelcomeComponent(){
    
    const {username} = useParams()

    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>Apologies for the 404. Reach out to our team at ABC</div>
        </div>
    )
}

export default ToDoApp;