"use client"

import { useState, FormEvent } from 'react';
import { useLoginMutation } from '../../redux/auth/auth.api';
import { ILogin } from '../../redux/auth/auth.types';
import useActions from '../../redux/hooks/useActions';
import Link from 'next/link';
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Login = () => {
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [login] = useLoginMutation();
  const { setAuthToken, setAuthUserId } = useActions();
  const router = useRouter()

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as Iterable<[ILogin]>;
    const entries: ILogin = Object.fromEntries(formData);

    await login(entries)
      .unwrap()
      .then(data => {
        const { token, id } = data;
        setAuthToken({ token });
        setAuthUserId({ userId: id });

        setInputError('');
        setInputSuccess('Login successful');

        setTimeout(() => {
          router.push('/');
        }, 1000);
      })
      .catch(err => {
        setInputError(err.data.message);
      });
  };

  return (
    <div className='reg-login-page'>
      <h2>Login</h2>
      <form action='/login' onSubmit={formSubmitHandler}>
        <div className={inputError.length ? 'form-item error-item' : 'form-item'}>
          <div className='form-field with-icon'>
            <input type='text' name='username' placeholder='Username:' />
            <FaTwitter />
          </div>
          <p className='api-sign-example'>api example: kminchelle</p>
        </div>
        <div className={inputError.length ? 'form-item error-item' : 'form-item'}>
          <div className='form-field with-icon'>
            <input type='password' name='password' placeholder='Password:' />
            <FaFacebookF />
          </div>
          <p className='api-sign-example'>api example: 0lelplR</p>
          <div className='form-error'>{inputError}</div>
          <div className='form-success'>{inputSuccess}</div>
        </div>
        <div className='form-submit'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
      <div className='change-sign-form'>
        <p>
          If you haven&apos;t an account? <Link href='/register'>Sign Up here</Link>
        </p>
        <p>
          Back to <Link href='/'>Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


























// import React from "react";
// import { IoLogoGoogle } from "react-icons/io";
// import { FaTwitter, FaFacebookF } from "react-icons/fa";

// const page = () => {


//   return (
//     <div className="inline-flex flex-col items-center gap-10 px-[357px] w-full h-full ">
//       <div className="flex w-full items-start gap-6 bg-slate-400">
//         <button className="flex bg-[#DB4437] rounded-3xl px-5 py-3 justify-center items-center gap-2 flex-1">
//           <IoLogoGoogle size={24} />
//           <span className="text-base font-Barlow font-semibold uppercase text-white">
//             With Google
//           </span>
//         </button>
//         <button className="flex bg-[#4267B2] rounded-3xl px-5 py-3 justify-center items-center gap-2 flex-1">
//           <FaFacebookF size={24} />
//           <span className="text-base font-Barlow font-semibold uppercase text-white">
//             With Facebook
//           </span>
//         </button>
//         <button className="flex bg-[#1DA1F2] rounded-3xl px-5 py-3 justify-center items-center gap-2 flex-1">
//           <FaTwitter size={24} color="white" />
//           <span className="text-base font-Barlow font-semibold uppercase text-white">
//             With Twitter
//           </span>
//         </button>
//       </div>

//       <div className="flex items-center gap-6 w-full ">
//         <div className="divide-y bg-black h-[1px] w-full "></div>
//         OR
//         <div className="divide-y bg-black h-[1px] w-full "></div>
//       </div>

//       <div className="flex justify-center items-start gap-20 self-stretch">
//         <div>
//           <h1 className="text-black font-Montserrat text-[28px]">Login</h1>
//           <p className="text-[#4F4F4F] font-Barlow text-base ">
//             Register with us for a faster checkout, to track the status of your
//             order and more
//           </p>

//           <div>
//             <h1 className="text-[#333] font-Montserrat text-sm font-medium pl-2">
//               Email
//             </h1>

//             <input
//               type="email"
//               name="Email"
//               className="flex items-center p-3 rounded-xl w-full h-[48px] border outline-none text-base font-Barlow text-[#333]"
//               placeholder="justiceopara33@gmail.com"
//               required
//             />
//           </div>
//           <div>
//             <h1 className="text-[#333] font-Montserrat text-sm font-medium pl-2">
//               Password
//             </h1>

//             <input
//               type="password"
//               name="Password"
//               className="flex items-center p-3 rounded-xl w-full h-[48px] border outline-none text-base font-Barlow text-[#333]"
//               placeholder="********"
//               required
//             />
//             <label className="">Forgot Password?</label>
//           </div>
//           <button className="flex py-3 px-5 justify-center items-center bg-[#FFD700] rounded-3xl text-base w-[160px] uppercase text-[#143A79] font-semibold">
//             Login
//           </button>

//           <div className="flex p-6 justify-center items-center gap-4 bg-[#F2F2F2] rounded-3xl">
//             <ul>
//               <span className="">Logging in Problem?</span>
//               <li className="text-base font-normal text-[#333]">1. Make sure to enter your correct Email or Password </li>
//               <li className="text-base font-normal text-[#333]">2. Check our FAQs section</li>
//               <li className="text-base font-normal text-[#333]">3. Contact our Customer Service</li>
//             </ul>
//           </div>
//         </div>

//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default page;
