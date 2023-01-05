import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";

const Login = ()=> {
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    })
    const [error,setError] = useState(null)

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);



    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    }
    return (
        <div className="flexContainer bg-firstBackground flex-col ">
            <h1 className="text-3xl text-loginTextColor mb-5">Login</h1>
            <form className="flex flex-col p-14 w-96 bg-white">
                <input className="inputStyle" type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input className="inputStyle" type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <button className="flex justify-center text-center p-2 bg-loginTextColor pointer mt-3" onClick={handleSubmit} >Login</button>
                {error && <p className="text-red-700 mt-4 ">{error}</p>}
                <span className="text-sm mt-2 ">
                    Don't you have an account? <Link className="text-firstBackground underline" to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login;