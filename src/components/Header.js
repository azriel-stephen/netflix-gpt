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
    <div className="flex justify-between absolute px-10 w-screen bg-gradient-to-b from-black/70 from-5 to-transparent py-3 z-10">
      <img className="w-56" src={NETFLIX_LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center">
          <img className="w-12 rounded-lg" src={user?.photoURL} alt="profile" />
          <button
            className="text-white/70 hover:text-slate-400"
            onClick={handleSignOut}
          >
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
