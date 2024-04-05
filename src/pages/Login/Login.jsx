import { Link, useLocation,useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Login = () => {

    const{signIn,user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleLogin = (e) =>{
        e.preventDefault()
        // console.log(e.currentTarget)
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password)

        const form = new FormData(e.currentTarget)
        // console.log(form)
        const email = form.get('email')
        const password = form.get('password')
   
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
            console.log("Logged in",result.user)
            navigate(location?.state? location.state :"/")
        })
        .catch(error=>{
            console.error(error.message)
        })
  
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className=" mt-3">

                <form className="card-body w-full md:w-3/4 lg:w-1/2 mx-auto border rounded-xl shadow-xl" onSubmit={handleLogin}>
                    <h2 className="text-3xl text-center font-semibold">Login Your Account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password"className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Login</button>
                    </div>
                    <p className="text-center mt-7">Do Not Have Account ? <Link to={"/register"} className="text-red-600 font-bold">Register</Link></p>
                </form>
                
            </div>
        </div>
    );
};

export default Login;