import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
    //    console.log(tokenString)
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
        //   console.log(role_user[0].name)
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

        // console.log("esto es nuestro user", user)
        // console.log("esto es nuestro token", token)
        // console.log("esto es nuestro token", role)

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

    const http = axios.create({
        baseURL:"https://git.heroku.com/ch-laravel-react-e-commerce.git/api",
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
