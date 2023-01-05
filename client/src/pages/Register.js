import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = ()=> {

    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })
    const [error,setError] = useState(null)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("/auth/register",inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="flexContainer bg-firstBackground flex-col ">
            <h1 className="text-3xl text-loginTextColor mb-5">Register</h1>
            <form className="flex flex-col p-14 w-96 bg-white">
                <input required className="inputStyle" type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input required className="inputStyle" type="text" placeholder="Email" name="email" onChange={handleChange}/>
                <input required className="inputStyle" type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <button className="flex justify-center text-center p-2 bg-loginTextColor pointer mt-3 " onClick={handleSubmit} >Register</button>
                {error && <p className="text-red-700 mt-4 ">{error}</p>}
                <span className="text-sm mt-2 ">
                    Do you have an account? <Link className="text-firstBackground underline" to="/login">Login</Link>
                </span>
            </form>
        </div>

    )
}


export default Register;