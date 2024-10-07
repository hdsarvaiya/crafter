"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Signup = () =>{
    const { data: session } = useSession();
    const router = useRouter();
  
    if (session) {
      router.push("/Login");
      return null; //  this return to avoid rendering the rest of the component
    }


    // register with form 

    async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          const formData = new FormData(event.currentTarget);
          const name = formData.get('name');
          const email = formData.get('email');
          const password = formData.get('password');
      
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
      
          if (response.status === 201) {
            router.push('/dashboard');
          } else {
            const errorData = await response.json();
            console.error('Error:', errorData.error);
            alert(`Error: ${errorData.error}`);
          }
        } catch (e) {
          console.error('Error:', e.message);
          alert(`Error: ${e.message}`);
        }
      }

  return (
<>
<div id="login-popup" 
    className="bg-[url('/assets/login-bg.svg')] bg-black fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">

        <div className="relative glassmorphism rounded-lg shadow">
           <Link rel="stylesheet" href="/" > <button type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-[#EEEEEE] hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">

                    <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
            </button></Link>

            <div className="p-5">
                <h3 className="text-2xl mb-0.5 font-medium"></h3>
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                    <p className="mb-3  text-3xl font-bold  leading-5 text-white">
                        Sign Up
                    </p>
                    <p className="mt-6 font-mono text-sm leading-4 text-white">
                        Welcome to <span className='font-semibold'>pageCrafter</span>  signup to create account
                    </p>
                </div>

                <div className='mt-8 '>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2" >
                    <label for="name" className="sr-only">Name</label>
                    <input name="name" type="name" autocomplete="name" required=""
                        className=" block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Enter your Name" />
                    <label for="email" className="sr-only">Email address</label>
                    <input name="email" type="email" autocomplete="email" required=""
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Email Address" />
                    <label for="password" className="sr-only">Password</label>
                    <input name="password" type="password" autocomplete="current-password" required=""
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Password" />

                    <button type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                        Continue
                    </button>
                </form>
                </div>

                <div className="flex w-full items-center gap-2 py-6 text-sm text-white">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>

                <div className="mt-2 flex flex-col gap-2">

                    <button onClick={()=>{signIn("github")}} 
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                            <Image
                        src="https://www.svgrepo.com/show/512317/github-142.svg"
                        alt="GitHub Logo"
                        width={64}
                        height={64}
                        quality={75} 
                            className="h-[18px] w-[18px] "/>
                        Continue with GitHub
                    </button>

                    {/* <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                            <Image
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                          width={100} height={100}  className="h-[18px] w-[18px] "/>
                          Continue with
                        Google
                    </button> */}


 
                </div>

            




                <div className="mt-3 text-center text-sm text-white">
                    Already have an account? 
                    <Link href="/Login" className="font-medium text-black
                    ">Login here..</Link>
                </div>
            </div>
        </div>
    </div>
</div>

</>
  )
}

export default Signup
