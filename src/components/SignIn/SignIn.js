import {useState} from 'react';

import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
    let re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [registerForm,setRegisterForm] = useState({
        email:"",
        password:"",
    });
    const [registerErrors,setRegisterErrors] = useState({
        emailErrors:null,
        passwordErrors:null,
    });
    const handleFormChange =(e)=>{
        console.log(e.target.name,e.target.value);
        // setRegisterForm({
        //     email :e.target.name === 'email'?e.target.value :registerForm.email,
        //     password:e.target.name === 'password'?e.target.value :registerForm.password,
        // });
        if(e.target.name === 'email'){
            setRegisterForm({
               ...registerForm,
               email:e.target.value
            });
            setRegisterErrors({
                ...registerErrors,
                emailErrors:
                e.target.value.length === 0  
                ? "this field is mandatory": 
                (!re.test(e.target.value))
                 ? "You have entered an invalid email address!" 
                 :null,
            });
        }else{
            setRegisterForm({
                ...registerForm,
                password:e.target.value
        });
        setRegisterErrors({
            ...registerErrors,
            passwordErrors:
            e.target.value.length ===0 
            ?"this field is mandatory":
            e.target.value.length <8 ? 
            "password must be greater than 8 "
            : null ,
        });
    }
    }
    const handleSubmit =()=>{
        console.log(registerForm);
        const {email,password}=registerForm;
        setRegisterErrors({
            emailErrors:email.length >0 ? null :"this field is mandatory",
            passwordErrors:password .length>0 ? null :"this field is mandatory",
        })
    }
    
  return (
    <>
    <div class=" bodyLogin  m-0 ">
        <div class="row">
            <div class="login bg-white">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" 
                        name="email"
                         class="form-control"
                          placeholder="email id"
                           id="email"
                           className={`form-control mt-2
                           ${registerErrors.emailErrors ? "border-danger" : ""}`} 
                          value={registerForm.email}
                          onChange={handleFormChange}
                           />
                           <small className="text-danger mt-2">{registerErrors.emailErrors}</small>
                           <br></br>

                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password"
                         class="form-control" 
                         placeholder="password"
                          id="pwd"
                          className={`form-control mt-2 ${registerErrors.passwordErrors ? "border-danger" : ""}`}
         value={registerForm.password}
         onChange={handleFormChange}
         />
         <small className="text-danger mt-2">{registerErrors.passwordErrors}</small>
         <br></br>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" 
                            type="checkbox"/>Remember me
                        </label>
                    </div>
                    <button 
                    type="submit" 
                    class="btn btn-primary"
                    onClick={handleSubmit} 
                    >Sign In</button>
                </form>
                <p>
                    <a href=""> Forgot your password ?</a>
                </p>
            </div>
        </div>
    </div>
    </>
  )
  }
  export default SignIn;
