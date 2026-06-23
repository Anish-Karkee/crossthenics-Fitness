import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navBar";

interface Props {
    type?: string;
}

const Form: React.FC<Props> = ({ type }) => {
    return (
        <>
            <Navbar />
            <div className=' py-20'></div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    {type === "signup" ? "Create an Account" : "Login to Your Account"}
                </p>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your username
                </label>
                <input placeholder="Enter Your Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="��������" id="password" type="password" />
                </div>
                {type === "signup" && (
                    <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm password
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="��������" id="confirmPassword" type="password" />
                </div>
                )}
                <div className="flex items-start">
                {type === "signup" && (
                    <>
                      <div className="flex items-center h-5">
                    <input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms" />
                </div>
                     <div className="ml-3 text-sm">
                    <label className="font-light  text-gray-300">
                    I accept the
                    <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                        Terms and Conditions
                    </a>
                    </label>
                </div>
                </>
                )}
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                    {type === 'signup' ? "Create an Account" : "Login to Your Account"}
                </button>
                <div className='flex items-start gap-24' >
                 {type === "login" && (
                                <p className="text-center text-sm text-black">
                                Don&apos;t have an account?{' '}
                             <Link href="/signup" className="font-medium text-blue-500 hover:text-red-500"> Sign up </Link>
                             </p>
                            )}
                             {type === "signup" && (
                                
                                <p className="text-center text-sm text-black">
                                If You have an account?{' '}
                             <Link href="/login" className="font-medium text-blue-500 hover:text-red-500"> Log In </Link>
                             </p>
                            )}
                             <p className=" text-sm text-black">
                                Back to
                             <Link href="/" className="font-medium text-blue-500 hover:text-red-500"> Home </Link>
                             </p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default Form;
