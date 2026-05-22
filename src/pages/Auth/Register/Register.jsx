import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../socialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {registerUser,  updateUserProfile} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    console.log('in register', location);

    const handleRegistration = (data) => {
            console.log('after register', data.photo[0]);
            const profileImg = data.photo[0];
            registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                  // store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);
                   // send the photo to store and get the ui
                const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`
                axios.post(image_API_URL, formData)
                .then(res => {
                  console.log('after image upload', res.data.data.url)

                  // update user profile
                  const userProfile = {
                    displayName : data.name,
                    photoURL : res.data.data.url
                  }
                   updateUserProfile(userProfile)
                   .then(() => {
                    console.log('user profile updated')
                    navigate(location.state || '/');
                   })
                   .catch(error => console.log(error))
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
       <h1 className="text-4xl text-center">Welcome Back</h1>
        <p className="text-center">Please Register</p>
       <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
    
         <fieldset className="fieldset">
              {/* Image field */}
          <label className="label">Photo</label>
          <input type="file" {...register('photo', {required: true})} className="file-input" placeholder="Your Name" />
          {errors.name?.type === 'required' && <p className='text-red-500'>Your Photo.</p>}
              {/* Name field */}
          <label className="label">Name</label>
          <input type="text" {...register('name', {required: true})} className="input" placeholder="Your Name" />
          {errors.photo?.type === 'required' && <p className='text-red-500'>photo is required.</p>}
              {/* Email field */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})} className="input" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}
                {/* Password field */}
          <label className="label">Password</label>
          <input type="password" {...register('password', 
            {
             required: true, 
             minLength: 6,
             pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/
            }
            )} className="input" placeholder="Password" />
            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>}
             {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
         <p>Already have an account? please <Link state={location.state} className='text-blue-500 underline' to='/login'>login</Link></p>
        </form> 
        <SocialLogin></SocialLogin>
    </div>
  )
}

export default Register