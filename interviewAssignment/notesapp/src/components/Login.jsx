import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const LoginPage = () => {
    const firebase = useFirebase()
    // console.log(firebase);
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    // console.log(firebase.isLoggedIn);
    useEffect(()=>{
        if(firebase.isLoggedIn){
            //navigate home
            navigate('/')
        }
    },[firebase, navigate])

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("Loging in user");
        const result = await firebase.signinUserWithEmailAndPassword(email, password)
        console.log("Login successful", result);
    }

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage