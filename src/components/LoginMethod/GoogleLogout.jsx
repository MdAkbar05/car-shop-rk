// src/GoogleLogout.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const GoogleLogout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout} className="redBtn">
        Logout
      </button>
    </div>
  );
};

export default GoogleLogout;
