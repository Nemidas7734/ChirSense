"use client";

import  { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { doResetPasword } from '../firebase/auth'
import queryString from 'query-string';


export default function Reset() {
    const [verifying, setVerifying] = useState<boolean>(true);
    const [verified, setVerified] = useState<boolean>(false);
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [oobCode, setOobCode] = useState<string>('');

    const navigate = useNavigate();
   
    

    useEffect(() => {

        let stringParams = queryString.parse(location.search);

        if (stringParams)
        {
            let oobCode = stringParams.oobCode as string;

            if (oobCode)
            {
                verifyPasswordResetLink(oobCode);
            }
            else
            {
                setVerified(false);
                setVerifying(false);
            }
        }
        else
        {
            setVerified(false);
            setVerifying(false);
            setChanging(false);
        }
        // eslint-disable-next-line
    }, []);

    const verifyPasswordResetLink = async (_oobCode: string) => {
        await doResetPasword(_oobCode)
            setOobCode(_oobCode);
            setVerified(true);
            setVerifying(false);
            navigate("/login")
    }
    
    
                                               


    return (
        <>
            <Navbar />
            {verifying ? <h1>loading</h1>:<>{verified ? <section className="min-h-[680px] min-w-[1140px] relative m-auto box-border ">
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
                                
                                className="flex flex-col items-center justify-center p-6  min-w-8"
                            >
                                <h1 className="mt-0 text-center mb-3 font-semibold text-black text-xl">
                                    Please enter a strong password.
                                </h1>
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
                                    disabled = {changing}
                                    color="success"
                                    onClick={() => verifyPasswordResetLink(oobCode)}
                                    className="border rounded py-1 h-10 mt-2 bg-green-600 hover:bg-green-500 text-white w-72"
                                >
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>:<h1>Invalid Link</h1>}</>
            
            }
            
            
        </>
    );
}
