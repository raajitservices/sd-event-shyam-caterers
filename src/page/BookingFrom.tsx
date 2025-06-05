import { collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Adjust the import path as necessary



interface Props {
  onClose: () => void;

  defaultType?: string;
}


const BookingForm: React.FC<Props> = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState('');     
 const[name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [date, setDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [venueTitle, setVenueTitle] = useState('');
    
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
    // reset when switching
  };
  const HandleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
      try{
           await addDoc(collection(db,'bookings'), {name,
          contactNumber,
          date,
          numberOfGuests,
          venueTitle,
          selectedService,
        });
      }
    // Handle form submission logic here
    
   // onClose(); // Close the modal after submission
    catch(err){
      console.error("Error adding document: ", err);
    }
    onClose(); // Close the modal after submission
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-gray-600 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Book Now</h2>

        <form className="space-y-2" onSubmit={HandleSubmit}>
          <input type="text"
             value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name" className="w-full border p-2 rounded" />

           <input
  type="tel"
  maxLength={10}
  pattern="[0-9]{10}"
  required
  placeholder="Enter Number"
  value={contactNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length <= 10) {
      setContactNumber(value);
    }
  }}
     className="w-full border p-2 rounded" />

          <input type="date"
           value={date}
           onChange={(e)=>setDate(e.target.value)}
           className="w-full border p-2 rounded" />

          <input type="number" 
           value={numberOfGuests}
           onChange={(e)=>setNumberOfGuests(e.target.value)}
          placeholder="Number of Guests" className="w-full border p-2 rounded" />

          <input type="text" 
          value={venueTitle}
          onChange={(e)=>setVenueTitle(e.target.value)}
          placeholder="Venue title" className="w-full border p-2 rounded" />
          <textarea
      name="venue"
      placeholder="Enter Venue Details"
     rows={3}
      className="w-full border p-2 rounded"
/>

          <select
            className="w-full border p-2 rounded"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="">Select Service</option>
            <option value="event">Event</option>
            <option value="catering">Catering</option>
          </select>

        
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default BookingForm;
