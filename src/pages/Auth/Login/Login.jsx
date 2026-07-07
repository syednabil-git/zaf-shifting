import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../socialLogin/SocialLogin';


const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const {signInUser} = useAuth();
  const location = useLocation();
  const navigate = useNavigate()


  const handleLogin = (data) =>{
      console.log('form data', data);
      signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
        navigate(location?.state || '/')
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 mb-20">
      <h1 className="text-4xl text-center">Welcome Back</h1>
      <p className="text-center">Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" {...register('email', {required:true})} placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
          }
          <label className="label">Password</label>
          <input type="password" className="input" {...register('password', {required:true, minLength: 6})} placeholder="Password" />
          {
            errors.password?.type === 'minLength' && <p className='text-red-500'>password must be 6 character longer.
            </p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p> have not any account? please <Link state={location.state} className='text-blue-500 underline' to='/register'>register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
    
  )
}

export default Login