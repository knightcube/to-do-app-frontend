import "./ToDoApp.css";
import { useState } from "react";

function ToDoApp(){
    return (
        <div>
            To Do App
            <LoginComponent/>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState("admin")

    const [password, setPassword] = useState("")

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

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
    return (
        <div>
            Welcome Component
        </div>
    )
}

export default ToDoApp;