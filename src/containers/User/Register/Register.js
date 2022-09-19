import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from "../../../components/AuthUser/AuthUser";

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [address,setAddress] = useState();
    const [city,setCity] = useState();
    const [phone,setPhone] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{email:email,password:password,full_name:name, address:address, city:city, phone:phone}).then((res)=>{
            navigate('/login')
        })
    }

    return(
        <div className="row justify-content-left pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="test" className="form-control" placeholder="Enter name"
                            onChange={e=>setName(e.target.value)}
                        id="name" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="test" className="form-control" placeholder="Enter address"
                            onChange={e=>setAddress(e.target.value)}
                        id="address" />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input type="test" className="form-control" placeholder="Enter city"
                            onChange={e=>setCity(e.target.value)}
                        id="city" />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="test" className="form-control" placeholder="Enter phone"
                            onChange={e=>setPhone(e.target.value)}
                        id="phone" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}