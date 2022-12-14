import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//definimos todas las funciones para gestionar usuarios
export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        if(typeof tokenString === 'undefined'){
          return false
        }
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const getRole = () =>{
      const roleString = sessionStorage.getItem('role');
        const role_user = JSON.parse(roleString);

        if(role_user !== null ){
          return role_user[0].name;
        }

        return role_user;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());
    const [role, setRole] = useState(getRole());

    const saveToken = (user,token,role) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        sessionStorage.setItem('role',JSON.stringify(role));

        setToken(token);
        setUser(user);
        setRole(role);
        navigate('/');
    }

    const logout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }

    //para hacer las llamadas axios que requieren token
    const http = axios.create({
        baseURL:"https://ch-laravel-react-e-commerce.herokuapp.com/api",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        getRole,
        getUser,
        http,
        logout
    }
}

