"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { doCredentialLogin } from '../api/actions';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");

  if (session) {
    router.push("/dashboard");
    return null;
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);

      if (response.error) {
        console.error("Authentication error:", response.error);
        setError(response.error.message);
      } else {
        router.push("/dashboard");
      }
    } catch (e) {
      console.error("Error during authentication:", e);
      const error = e
      setError("Incorrect Email or Password");
    }
  }

  return (
    <>
      <div
        id="login-popup"
        tabIndex="-1"
        className="bg-[url('/assets/login-bg.svg')]  bg-[#000] fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto ">
          <div className="relative glassmorphism text-white rounded-lg shadow-2xl">
            <Link href="/" >
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close popup</span>
              </button>
            </Link>

            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium"></h3>
              <p className="mb-4 text-sm font-normal text-gray-800"></p>

              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-white">
                  Login to your account
                </p>
                <p className="mt-2 text-sm leading-4 text-white">
                  You must be logged in to perform this action.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <button
                  onClick={() => {
                    signIn("github");
                  }}
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Image
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub Logo"
                  width={64}
                  height={64}
                  quality={75}
                    className="h-[18px] w-[18px]"
                  />
                  Continue with GitHub
                </button>

                {/* <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <Image
                  width={50}
                  height={50}
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with Google
                </button> */}


              </div>

              <div className="flex w-full items-center gap-2 py-6 text-sm text-white">
                <div className="h-px w-full bg-slate-200"></div>
                OR
                <div className="h-px w-full bg-slate-200"></div>
              </div>

              <form onSubmit={onSubmit} className="w-full flex flex-col gap-2">
              <label htmlFor="name" className="sr-only">Name</label>
                    <input name="name" type="name" autocomplete="name" required=""
                        className="text-black block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Enter your Name" />
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required=""
                  className="block text-black w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Email Address"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required=""
                  className="text-black mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                />
                <p className="mb-3 mt-2 text-sm text-red-500">
                  {error}
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                >
                  Continue
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-white">
                Don&apos;t have an account?
                <a href="/Signup" className="font-medium text-black">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
