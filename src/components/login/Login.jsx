// import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import 'animate.css';

// -------------
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Button, Container, TextField } from '@mui/material';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn } = useAuth();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`
          },
          hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        toast.error('Invalid Email/Password');
      });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
          .then(() => {
            navigate('/');
          });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-[url('https://i.postimg.cc/Y075n05X/1000-F-668433624-HGKul-Uw-Qjae-LV8-Xay-QYy6-F3-RCVQff-TGv.jpg')] animate__animated animate__slideInLeft animate__delay-1s">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="hero-content flex-col">
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-bold text-black my-3">
            <h1 class="animate__animated animate__fadeInDown">
              Login now!
            </h1>
          </div>
          <div className="card flex w-full lg:w-[600px] lg:h-[600px] md:w-[600px] md:h-[600px] shadow-2xl bg-base-100 mt-10 animate__animated animate__slideInLeft animate__delay-2">
            <Container maxWidth="sm" className="relative z-10">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                  <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6 text-center animate__animated animate__fadeInDown">
                    Login now!
                  </h1>

                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <TextField
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        fullWidth
                      />
                    </div>
                    <div className="mb-6">
                      <TextField
                        label="Password"
                        type="password"
                        name="password"
                        required
                        placeholder="password"
                        fullWidth
                      />
                      <div className="text-right">
                        <Link to="#" className="text-orange-500 text-sm">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className="h-11 mb-4"
                      sx={{
                        backgroundColor: 'orange', // Sets the background color to orange
                        '&:hover': {
                          backgroundColor: 'darkorange', // Sets the hover color to a darker shade of orange
                        },
                      }}
                    >
                      <span className="text-lg text-black">Login</span>
                    </Button>
                  </form>

                  <p className="text-center text-lg mt-4">
                    New to this site? Please{' '}
                    <Link to="/register" className="text-orange-600 font-bold">
                      Register
                    </Link>
                  </p>

                  <div className="text-center mb-4">
                    <span className="text-lg font-semibold">or</span>
                  </div>

                  {/* <div>
                        <Button
                            onClick={handleGoogleSignIn}
                            variant="outlined"
                            fullWidth
                            
                            startIcon={<FcGoogle />}
                            className="mb-4"
                        >
                            Continue with Google
                        </Button>
                    </div> */}

                  <Button
                    onClick={handleGoogleSignIn}
                    variant="outlined"
                    fullWidth
                    startIcon={<FcGoogle />}
                    className="mb-4"
                    sx={{
                      color: 'orange', // Set text color to orange
                      borderColor: 'orange', // Set border color to orange
                      '&:hover': {
                        borderColor: 'darkorange', // Change border color on hover
                        color: 'darkorange', // Change text color on hover
                      },
                    }}
                  >
                    Continue with Google
                  </Button>


                  <p className="text-center text-lg">
                    Go back to{' '}
                    <Link to="/" className="text-orange-600 font-bold">
                      Home
                    </Link>
                  </p>

                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

