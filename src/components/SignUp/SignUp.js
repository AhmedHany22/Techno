import {useState} from 'react';

import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
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
    <div class="container-fluid bgd mb-0">
	<div class="signup-form mb-0">
		<form action="/examples/actions/confirmation.php" method="post">
			<h2>Sign Up</h2>
			<p>Please fill in this form to create an account!</p>
			<hr></hr>
			<div class="form-group">
				<div class="row">
					<div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
					<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
				</div>
			</div>
			<div class="form-group">
				<input type="email"
				 class="form-control"
				  name="email"
				   placeholder="Email"
				    required="required"
					className={`form-control mt-2
					${registerErrors.emailErrors ? "border-danger" : ""}`} 
				   value={registerForm.email}
				   onChange={handleFormChange}
				   />
				   <small className="text-danger mt-2">{registerErrors.emailErrors}</small>
				   <br></br>
			</div>
			<div class="form-group">
				<input type="password"
				 class="form-control"
				  name="password"
				   placeholder="Password" 
				   required="required"
				   className={`form-control mt-2 ${registerErrors.passwordErrors ? "border-danger" : ""}`}
				   value={registerForm.password}
				   onChange={handleFormChange}
				   />
				   <small className="text-danger mt-2">{registerErrors.passwordErrors}</small>
				   <br></br>
				   
			</div>
			<div class="form-group">
				<input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
			</div>
			<div class="form-group">
				<label class="form-check-label">
                <input type="checkbox" required="required"/>
                 I accept the <a href="#">Terms of Use</a> &amp; 
                 <a href="#">Privacy Policy</a></label>
			</div>
			<div class="form-group">
				<button type="submit" 
				class="btn btn-primary btn-lg"
				onClick={handleSubmit} 

				>Sign Up</button>
			</div>
			<div class="hint-text">Already have an account?
             <a href="../Eman/login.html" class="hint-text">
             Login here</a></div>

		</form>
	</div>
</div>
    </>
    );
  };
  export default SignUp;
