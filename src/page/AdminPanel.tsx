import React, { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

// Interfaces
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

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function AdminPanel() {
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [contactData, setContactData] = useState<Contact[]>([]);

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Logged out");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      console.error("❌ Logout failed:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingSnapshot = await getDocs(collection(db, "Booking"));
        const contactSnapshot = await getDocs(collection(db, "contactus"));

        const bookings = bookingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const contacts = contactSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookingData(bookings as Booking[]);
        setContactData(contacts as Contact[]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBooking = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await deleteDoc(doc(db, "Booking", id));
      setBookingData((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await deleteDoc(doc(db, "contactus", id));
      setContactData((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

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

      <p className="mb-6 text-gray-300">
        SD Event & Shyam Catering – Manage Booking and Contact Data
      </p>

      {/* BOOKINGS TABLE */}
      <h2 className="text-2xl font-bold mb-4 text-cyan-300">Bookings</h2>
      {bookingData.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white text-gray-800">
          <table className="w-full text-sm">
            <thead className="bg-cyan-800 text-white text-xs uppercase tracking-wider sticky top-0">
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
              {bookingData.map((user, idx) => (
                <tr
                  key={user.id}
                  className={`hover:bg-gray-50 transition ${
                    idx % 2 === 0 ? "bg-gray-100/20" : "bg-white"
                  }`}
                >
                  <td className="px-5 py-3">{user.name || "—"}</td>
                  <td className="px-5 py-3">{user.email || "—"}</td>
                  <td className="px-5 py-3">{user.contactNumber || "—"}</td>
                  <td className="px-5 py-3">{user.date || "—"}</td>
                  <td className="px-5 py-3">{user.numberOfGuests ?? "—"}</td>
                  <td className="px-5 py-3">{user.venueTitle || "—"}</td>
                  <td className="p-3 space-x-4 flex justify-center items-center">
                    <a
                      href={`tel:${user.contactNumber}`}
                      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow"
                    >
                      📞 Call
                    </a>
                    <button
                      onClick={() => handleDeleteBooking(user.id)}
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
        <p className="text-center text-gray-400">No booking data found.</p>
      )}

      {/* CONTACT TABLE */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-cyan-300">Contact Messages</h2>
      {contactData.length > 0 ? (
        <div className="overflow-x-auto w-full rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700 bg-white">
            <thead className="bg-cyan-800 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 border-b">Name</th>
                <th className="px-4 py-3 border-b">Email</th>
                <th className="px-4 py-3 border-b">Contact</th>
                <th className="px-4 py-3 border-b">Message</th>
                <th className="px-4 py-3 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contactData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3 break-words">{item.email}</td>
                  <td className="px-4 py-3">{item.phone}</td>
                  <td className="px-4 py-3">{item.message}</td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <a
                      href={`tel:${item.phone}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow"
                    >
                      📞 Call
                    </a>
                    <button
                      onClick={() => handleDeleteContact(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow"
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
        <p className="text-center text-gray-400">No contact messages found.</p>
      )}
    </div>
  );
}
