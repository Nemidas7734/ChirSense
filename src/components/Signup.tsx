"use client";

import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'


export default function SignUp() {
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [isRegistering, setIsRegistering] = useState<boolean>(false)

    const navigate = useNavigate();
   
    
    const onSubmit = async (e:any) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
        navigate("/login")
    }                                                  


    return (
        <>
            <Navbar />
            <section className="min-h-[680px] min-w-[1140px] relative m-auto box-border ">
                <img
                    src="naser-tamimi-wCByk0dxtEk-unsplash.jpg"
                    className="block box-border overflow-hidden align-middle mt-[60px] ml-auto h-[620px] w-[570px] object-cover bg-center bg-no-repeat bg-cover"
                />
                <div className="relative box-border isolate flex min-h-[620px] h-auto mt-[-620px] mr-auto ml-0 mb-[60px] w-[570px]">
                    <div className="p-7 flex flex-col flex-1 max-w-full box-border isolate justify-center">
                        <h1 className="relative flex-shrink-0 break-words text-6xl font-bold mr-auto isolate box-border font-sans">
                            SAVE BIRD, SAVE LIFE !!!
                        </h1>
                        <div className="form-container flex justify-center mt-6 p-5 max-w-auto">
                            <form
                                onSubmit={onSubmit}
                                className="flex flex-col items-center justify-center p-6  min-w-8"
                            >
                                <h1 className="mt-0 text-center mb-3 font-semibold text-black text-xl">
                                    Signup
                                </h1>
                                <h1 className="text-sm mb-4 ">
                                    Already have an account? <Link to='/login' className="hover:underline underline-offset-4">Login</Link>
                                </h1>
                                <div className=" mb-4">
                                    <h1 className="text-slate-500 text-xs py-1 mr-64">Email</h1>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                        className="border border-slate-500 h-10 w-72 rounded"
                                        
                                        placeholder=" Enter Your Email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <h1 className="text-slate-500 text-xs py-1 mr-60">Password</h1>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="border border-slate-500 px-0 h-10 w-72 rounded"
                                        placeholder=" Enter Your Password"
                                        required
                                    />
                                </div>
                                <button
                                    type="button"
                                    disabled = {isRegistering}
                                    color="success"
                                    onClick={onSubmit}
                                    className="border rounded py-1 h-10 mt-2 bg-green-600 hover:bg-green-500 text-white w-72"
                                >
                                    Signup
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
