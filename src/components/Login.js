import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  NETFLIX_BANNER_IMG_URL,
  PROFILE_PICTURE_URL,
} from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    // validation of the form data
    const errorMessage = checkValid(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : null
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;
    // Sign in / sign up logic continues from here on
    if (!isSignInForm) {
      // Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_PICTURE_URL,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode.slice(5).split("-").join(" "));
          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode.slice(5).split("-").join(" "));
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={NETFLIX_BANNER_IMG_URL} alt="banner" className="" />
      </div>
      <div className="absolute"></div>
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
        <p
          className="text-gray-500 hover:text-gray-400 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now!"
            : "Already signed up? Login now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
