"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const LandingNavbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="navanimate text-black w-full flex items-center justify-between relative z-20">

        <div className="logo p-4">

        {/* <Image src="/assets/Nav-logo.png" width={100} height={100} alt="logo"  /> */}
        <span className="text-xl text-white font-bold">PageCrafter</span>
        </div>

        <div className="flex pr-4 gap-8">
          {!session && <button className="docs-btn ">Docs</button>}
          {session && (
            <div className="relative">
              <Link href={"/dashboard"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Dashboard
                </button>
              </Link>

              <button
                onClick={() => signOut()}
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Sign Out
              </button>
              {/* <button
                onClick={() => setShowDropdown(!showDropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowDropdown(false);
                  }, 100);
                }}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Welcome {session.user.name}{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  showDropdown ? "" : "hidden"
                } left-8 mt-1 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <Link href="/dashboard">
                  
                    
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </span>
                  
                    </Link>
                  
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  
                </ul>
              </div> */}
            </div>
          )}

          {!session && (
            <Link href="/Signup">
              <button className="sign-login-btn">
                Sign up
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default LandingNavbar;
