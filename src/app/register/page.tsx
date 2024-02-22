'use client'

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRegisterMutation } from '../../redux/auth/auth.api';
import { IRegister } from '../../redux/auth/auth.types';
import useActions from '../../redux/hooks/useActions';
import { useRouter } from "next/navigation";
import Image from 'next/image';


const Register = () => {
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [register] = useRegisterMutation();
  const { setAuthToken, setUser } = useActions();
  const router = useRouter();

  const isValidForm = (formData: IRegister) => {
    const { email, password, firstName, lastName } = formData;
    if (!email.length || !password.length || !firstName.length || !lastName.length) {
      setInputError('Please fill in all fields');
      return false;
    }

    return true;
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as Iterable<[IRegister]>;
    const entries: IRegister = Object.fromEntries(formData);

    if (!isValidForm(entries)) return;

    await register(entries)
      .unwrap()
      .then(data => {
        const { token } = data;
        setAuthToken({ token });
        setUser(data);

        setInputError('');
        setInputSuccess('Registration successful');

        setTimeout(() => {
          router.push('/');
        }, 1000);
      })
      .catch(err => {
        setInputError(err.data.message);
      });
  };

  return (
   
    <div className="w-full lg:h-[75vh] flex items-center">
      <div className="w-full h-full relative hidden lg:block">
        <Image src="/fashion-store.png" className="" fill alt="Register pic" />
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <form className="lg:p-44 p-20" onSubmit={formSubmitHandler} action='/register'>
          <span className="text-sm font-normal"> LET`S GET YOU STARTED</span>

          <h1 className="text-[25px] text-black">Create an Account</h1>

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Email
            </label>
            <input type='email' name='email' placeholder='Email:'  className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "/>
           
          </div>
          <div className="my-4">
            <label
              htmlFor="firstName"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              FirstName
            </label>
            <input type='text' name='firstName' placeholder='FirstName:' className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "/>
            
           
          </div>
          <div className="my-4">
            <label
              htmlFor="firstName"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              LastName
            </label>
            <input type='text' name='lastName' placeholder='LastName:' className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "/>
            
           
          </div>

          <div className="my-4">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Password
            </label>
            
            <input type='password' name='password' placeholder='Password:'className="border text-[#4A5568] text-base rounded-lg  block w-full p-3 border-[#424242] outline-none" />
            <div className='text-red-500'>{inputError}</div>
          <div className='text-green-500'>{inputSuccess}</div>
          </div>

          <button
            className="uppercase w-full h-[50px] bg-black text-white rounded-lg my-4"
            type="submit"
          >
            GET STARTED
          </button>

          <div className="text-center text-sm font-normal mt-12">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold underline">
              LOGIN HERE
            </Link> or Go back 
            <Link href='/' className="font-semibold underline"> Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;