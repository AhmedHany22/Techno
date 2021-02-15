import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {

  return (
    <>
    <div class=" bodyLogin  m-0 ">
        <div class="row">
            <div class="login bg-white">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="email id" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" class="form-control" placeholder="password" id="pwd"/>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"/>Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
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
  export default Login;
