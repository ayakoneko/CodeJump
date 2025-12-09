import { useState } from 'react'
import './LoginForm.css'


export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
    setShowPassword(!showPassword);
    }

    return (
    <>
        <div>
        <input className="input" placeholder="Email"/>
        </div>
        <div>
        <input className="input" placeholder="Password" type={showPassword ? 'text' : 'password'}/>
        <button className="show-button" onClick={toggleShowPassword}>{showPassword ? 'Hide' : 'Show'} </button>
        </div>
        <button className="button"> Login </button>
        <button className="button"> Sign Up </button>
    </>
    )
}