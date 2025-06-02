
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase"; // Make sure this is correctly exported
 import { signOut } from "firebase/auth"; // Import signOut for logout functionality




export default function AdminPanel() {


 const navigate = useNavigate();
     const handleLogout= async ()=>{
            try{
                  await signOut(auth);
                  console.log("✅ Logged out successfully");
                  setTimeout(()=>{
                    navigate("/login");
                  }, 1000); // Optional: delay for better UX
          
            navigate("/login"); // Redirect to login page after logout}
              
         }
            catch(err){
              console.error("❌ Logout failed:", err);
            }
         }
  return (
     <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
