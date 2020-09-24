import React, { useState } from 'react';
import './Login.css'
import logo from "../../Images/google.png";
import logo2 from "../../Images/fb.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        issSignIn: false,
        name: '',
        firstName:'',
        lastName:'',
        address:'',
        email: '',
        password:'',
        photo:'',
    });
    ///////////////////
    // --> Route change
    ///////////////////
    
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/shipment" } };

    //////////////////////////////////////
    // -> Google Sign in handel area start
    //////////////////////////////////////

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handelGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(response =>{
            const user = response.user;
            alert('Login successful', user);
            history.replace(from);
            
        })
        .catch(error =>{
            console.log(error);
            console.log(error.message);
        })
    };

    //////////////////////////////////////
    // -> Facebook Sign in handel area start
    //////////////////////////////////////

    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handelFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const user = result.user;
            console.log('Login successful', user);
            history.replace(from);
        }).catch(function(error) {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    };

    ////////////////////////////////////////////////
    // -> Email validation / Form validation area start
    ////////////////////////////////////////////////

    const handelInputValueChange = (event) => {
        let isFieldValid =  true;
        if(event.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            const isPasswordValid = event.target.value.length > 6;
            const passHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    };

    const handelForm = (event) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                alert("Login successful", response);
                updateUserInfo(user.firstName, user.lastName, user.address);
                history.replace(from);
            })
            .catch(error => {
                var errorMessage = error.message;
                alert(errorMessage);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(response =>{
                alert("Login successful", response);
                history.replace(from);
            })
            .catch(error => {
                alert("invalid user, please creat an account-!", error);
            });
        }
        event.preventDefault();
    };

    const updateUserInfo = (firstName, lastName, address) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            firstName: firstName,
            lastName: lastName,
            address: address,
        }).then(function() {
            console.log('user name update successfully');
            history.replace(from);
        }).catch(function(error) {
            console.log(error);
        });
    };
    return (
        <div className="Login">
            <div className="form-check text-center mt-3">
                    <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} className="form-check-input" />
                    <label className="form-check-label" for="exampleCheck1"><span>New User Sign Up</span></label>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="form mt-3">
                            <form onSubmit = {handelForm}>
                                {newUser ? <h1 className="text-center">Creat an account</h1> : <h1 className="text-center">Log-in</h1>}
                                <br/>
                                {newUser && <div className="form-group">
                                                <label for="exampleInputEmail1">First Name</label>
                                                <input onBlur={handelInputValueChange} name ="name" type="text" className="form-control"  placeholder="Enter your first name" required/>
                                                <br/>
                                                <label for="exampleInputEmail1">Last Name</label>
                                                <input onBlur={handelInputValueChange} name ="name" type="text" className="form-control"  placeholder="Enter your last name" required/>
                                                <br/>
                                                <label for="exampleInputEmail1">Address</label>
                                                <input onBlur={handelInputValueChange} name ="name" type="text" className="form-control"  placeholder="Enter your address" required/>
                                            </div>                                            
                                }
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input onBlur={handelInputValueChange} name ="email" type="email" className="form-control"  placeholder="Enter your email" required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onBlur={handelInputValueChange} name ="password" type="password" className="form-control" placeholder="Enter your password" required/>
                                </div>
                                <input type="submit" value={newUser ? 'Sign Up' : 'Log in'} className="btn btn-warning mb-3"/>
                            </form>
                        </div>
                        <button onClick={handelFbSignIn} type="submit" className="btn  Button"> <img src={logo2} alt=""/>Continue with Facebook</button> 
                        <button onClick={handelGoogleSignIn} type="submit" className="btn Button"> <img src={logo} alt=""/>Continue with Google</button> 
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;