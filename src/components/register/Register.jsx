import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import 'animate.css';
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="hero min-h-screen bg-base-200 bg-[url('https://i.postimg.cc/Y075n05X/1000-F-668433624-HGKul-Uw-Qjae-LV8-Xay-QYy6-F3-RCVQff-TGv.jpg')] animate__animated animate__slideInLeft animate__delay-1s">
      <div className="hero-content flex-col">
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-bold text-black my-3">
            <h1 class="animate__animated animate__fadeInDown">
              Register now!
            </h1>
          </div>
          <div className="card flex w-full lg:w-[600px] lg:h-[600px] md:w-[600px] md:h-[600px] shadow-2xl bg-base-100 mt-10 animate__animated animate__slideInLeft animate__delay-2">
            <form className="card-body">
              <div className="form-control animate__animated animate__slideInLeft animate__delay-3s">
                <label className="label">
                  <span className="label-text mb-2 font-semibold text-[15px] md:text-[25px]">
                    name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered focus:ring focus:ring-red-500"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__slideInLeft animate__delay-4s">
                <label className="label">
                  <span className="label-text mb-2 font-semibold text-[15px] md:text-[25px] ">
                    imageLink
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="imageurl"
                  name="image"
                  className="input input-bordered focus:ring focus:ring-red-500"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__slideInLeft animate__delay-5s">
                <label className="label">
                  <span className="label-text font-semibold text-[15px] md:text-[25px] mb-2">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered focus:ring focus:ring-red-500"
                  name="email"
                  required
                />
              </div>
              <div className="form-control relative animate__animated animate__slideInLeft animate__delay-5s ">
                <label className="label">
                  <span className="label-text font-semibold mb-2 text-[15px] md:text-[25px] ">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered focus:ring focus:ring-red-500"
                />
                <span
                  className="absolute  bottom-11 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-2xl"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-2xl"></FaEyeSlash>
                  )}
                </span>
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-bold text-[] md:text-[15px] animate__animated animate__slideInLeft"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 animate__animated animate__slideInLeft animate__delay-5s">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <div className="flex justify-end space-x-5"> 
                <div>
                    <h1 className="font-bold">Already user please???</h1>     
                </div> 
                <Link className="text-blue-700 underline font-bold" to="/login">Login</Link> 
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;