import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
   
        console.log(name,photo,email,password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=" mt-3">

                <form className="card-body w-full md:w-3/4 lg:w-1/2 mx-auto border rounded-xl shadow-xl" onSubmit={handleRegister}>
                    <h2 className="text-3xl text-center font-semibold">Register Your Account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
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
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Login</button>
                    </div>
                    <p className="text-center mt-7">Already Have Account ? <Link to={"/login"} className="text-red-600 font-bold">Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Register;