"use client";

import { useState, FormEvent } from "react";
import { useLoginMutation } from "../../redux/auth/auth.api";
import { ILogin } from "../../redux/auth/auth.types";
import useActions from "../../redux/hooks/useActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [inputError, setInputError] = useState("");
  const [inputSuccess, setInputSuccess] = useState("");
  const [login] = useLoginMutation();
  const { setAuthToken, setAuthUserId } = useActions();
  const router = useRouter();

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as Iterable<[ILogin]>;
    const entries: ILogin = Object.fromEntries(formData);

    await login(entries)
      .unwrap()
      .then((data) => {
        const { token, id } = data;
        setAuthToken({ token });
        setAuthUserId({ userId: id });

        setInputError("");
        setInputSuccess("Login successful");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((err) => {
        setInputError(err.data.message);
      });
  };

  return (
    <div className="w-full h-[75vh]  flex items-center mt-10 lg:mt-0">
      <div className="w-full h-full relative hidden lg:block">
        <Image src="/fashion-store.png" className="" fill alt="login pic" />
      </div>
      <div className="w-full h-full flex flex-col justify-center ">
        <form
          action="/login"
          className="lg:p-44 p-20"
          onSubmit={formSubmitHandler}
        >
          <span>WELCOME BACK</span>
          <h1 className="text-[25px] font-normal text-black">
            Log In to your Account
          </h1>

          <div className="my-4">
            <label
              htmlFor="Name"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Name
            </label>

            <input
              type="text"
              name="username"
              placeholder="Username:"
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3"
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Password:"
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3"
            />
            <div className="text-red-500">{inputError}</div>
            <div className="text-green-500">{inputSuccess}</div>
          </div>

          <button
            className="uppercase w-full h-[50px] bg-black text-white rounded-lg my-4"
            type="submit"
          >
            Continue
          </button>

          <div className="text-center text-sm font-normal mt-12">
            New User?{" "}
            <Link href="/register" className="font-semibold underline">
              SIGN UP HERE
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
