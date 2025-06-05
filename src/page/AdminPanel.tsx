
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase"; // Make sure this is correctly exported
 import { signOut } from "firebase/auth"; // Import signOut for logout functionality
import { collection, QuerySnapshot } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth to access Firebase auth
interface Booking {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  message: string;
  date?: string;
  numberOfGuests?: number;
  venueTitle?: string;
}


export default function AdminPanel() {

const [userData, setUserData] = useState<Booking[]>([]);

     
     
     // Initialize Firebase auth and Firestore
     const auth = getAuth();
     const db = getFirestore();
     
     // Use navigate from react-router-dom
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
//// Fetch bookings data from Firestore
           useEffect(()=>{
             const featchBookings = async () => {
              try{
                   const querySnapshot=await getDocs(collection(db,'bookings'));
                   const bookingsData = querySnapshot.docs.map((doc) => ({
                     id: doc.id,
                      ...doc.data(),
                    }));
                    setUserData(bookingsData as Booking[]);
              }
              catch(err){
                console.error("Error fetching bookings:", err);
              }
           }
            featchBookings(); 
  },  []);
   

// Function to handle deletion of a booking
   const handleDelete = async (id: string) => {
if(!window.confirm("Are you sure you want to delete this booking?")) return;
     try {
      await deleteDoc(doc(db, 'bookings', id));
      setUserData((prevData) => prevData.filter((user) => user.id !== id)); 
     }
      catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
// Function to handle logout

  return (
     <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-cyan-400">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
        >
          Logout
        </button>
      </div>
{/*show data fromfatch to firebase */}
      <p className="mb-6 text-gray-300">
         SD Event & Shyam Catering manage user inquiries and data with ease.
      </p>

      {userData.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="w-full text-sm text-gray-700">
           <thead className="bg-cyan-800 text-white text-left text-xs uppercase tracking-wider sticky top-0">
      <tr>
        <th className="px-5 py-3">Name</th>
        <th className="px-5 py-3">Email</th>
        <th className="px-5 py-3">Contact</th>
        <th className="px-5 py-3">Date</th>
        <th className="px-5 py-3">Guests</th>
        <th className="px-5 py-3">Venue</th>


        <th className="px-5 py-3 text-center">Action</th>
      </tr>
    </thead>
               <tbody className="divide-y divide-gray-200">
            {userData.map((user, idx) => (
        <tr
          key={user.id}
          className={`hover:bg-gray-50 transition ${
            idx % 2 === 0 ? 'bg-gray-100/20' : 'bg-white'
          }`}
        >
          <td className="px-5 py-3 whitespace-nowrap">{user.name || '—'}</td>
          <td className="px-5 py-3 break-all">{user.email || '—'}</td>
          <td className="px-5 py-3">{user.contactNumber || '—'}</td>
          <td className="px-5 py-3">{user.date || '—'}</td>
          <td className="px-5 py-3">{user.numberOfGuests ?? '—'}</td>
          <td className="px-5 py-3">{user.venueTitle || '—'}</td>
      
           <td className="p-3 space-x-4 flex justify-center items-center">
  {user.contactNumber ? (
    <a
      href={`tel:${user.contactNumber}`}
      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow"
    >
    📞 Call
    </a>
  ) : (
    <span className="text-gray-400">No Number</span>
  )}
  {/* Add more actions here if needed */}
  <button
    onClick={() => handleDelete(user.id)}
    className="inline-flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow"
  >
   🗑 Delete
  </button>
</td>

  </tr>
))}


            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-400">No contact data found.</p>
      )}
    </div>
  );
}
