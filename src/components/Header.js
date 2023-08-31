import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between absolute  w-full  bg-gradient-to-b from-black via-black/70  z-10">
      <img className="w-56" src={NETFLIX_LOGO_URL} alt="logo" />
      {user && (
        <div className=" flex items-center  justify-between px-6 mt-12">
          <img
            className="w-16  rounded-lg"
            src={user?.photoURL}
            alt="profile"
          />
          <button
            className="w-full  text-white/70 p-1 leading-none hover:text-slate-400"
            onClick={handleSignOut}
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
