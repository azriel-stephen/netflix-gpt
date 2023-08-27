import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValid } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    // validation of the form data
    const message = checkValid(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : null
    );
    setErrorMessage(message);
    console.log(password.current.value);
    console.log(name.current.value);

    // Sign in / sign up
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
          className=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 from-5 to-transparent"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center w-1/3 absolute rounded-lg bg-black/80 p-12 my-32 mx-auto right-0 left-0 text-white hover:bg-black/[0.85]"
      >
        <h1 className="font-bold p-4 text-3xl self-start ml-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-4/5 rounded bg-zinc-600/60 hover:bg-zinc-600/70 font-thin"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-4/5 rounded bg-zinc-600/60 hover:bg-zinc-600/70 font-thin"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-4/5 rounded bg-zinc-600/60 hover:bg-zinc-600/70 font-thin"
        />
        <p className="text-sm font-bold text-center text-red-500">
          {errorMessage}
        </p>
        <button
          className="font-semibold bg-red-700 hover:bg-red-500 my-4 p-4 w-2/3 rounded"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-500 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up now!"
            : "Already signed up? Login now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
