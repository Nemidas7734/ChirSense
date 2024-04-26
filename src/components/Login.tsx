import { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from '../firebase/auth'
import { useAuth } from '../contexts/authContext'
import { Navigate } from "react-router-dom";


export default function Login() {
  const { userLoggedIn } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false)

  const onSubmit = async (e : any) => {
    e.preventDefault()
    if(!isSigningIn) {
        setIsSigningIn(true)
        await doSignInWithEmailAndPassword(email, password)
        navigate("/home")
    }
}

  const navigate = useNavigate();

  // const logInUser = () => {
  //   axios.post(' http://localhost:8000/login', {email,password})
  //   .then(result => {
  //       console.log('Response text:', result);
  //       if(result.data == "Success"){
  //         navigate("/");
  //       }
        
  //   })
  //   .catch(error => {
  //       console.error('There was a problem with the fetch operation:', error);
  //       // Handle error appropriately
  //   });
  // }

  return (
    <>
      <Navbar />
      {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
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
            <div className="form-container ">
              <div className="flex justify-center items-center mt-7 p-5 max-w-auto ">
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col items-center justify-center  p-6  min-w-80 "
                >
                  <h1 className="mt-0 text-center mb-1 font-semibold text-black text-xl">
                    Login
                  </h1>
                  <h1 className="text-xs mb-4 ">
                    Don&apos;t have an account ?<Link to="/signup" className="hover:underline underline-offset-4 font-semibold"> SignUp </Link>
                  </h1>
                  <div className="mb-4">
                    <h1 className="text-slate-500 text-xs mr-60 py-1">Email</h1>
                    <input
                      type="email"
                      name="email"
                      autoFocus
                      value={email}
                      className="border border-slate-500 h-10 w-72 rounded"
                      onChange={(e)=>setEmail(e.target.value)}
                      // id="exampleInputEmail1"
                      // placeholder=" Enter Your Email"
                      // required
                    />
                  </div>
                  <div className="mb-4">
                    <h1 className="text-slate-500 text-xs mr-56 py-1">Password</h1>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      className="border border-slate-500 px-0 h-10 w-72 rounded"
                      onChange={(e) => setPassword(e.target.value)}
                      // id="exampleInputPassword1"
                      // placeholder=" Enter Your Password"
                      // required
                    />
                  </div>
                  <div className="mb-4">
                    <button
                      type="button"
                      className="hover:text-black hover:underline underline-offset-4 font-normal hover:border-black"
                      // onClick={() => { navigate("/forgot-password"); }}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="px-0">
                    <button
                      type="submit"
                      // onClick={logInUser}
                      className="border rounded py-1 h-10 mt-2 bg-green-600 hover:bg-green-500 text-white w-72"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
