import React, { useState } from 'react';


interface Props {
  onClose: () => void;

  defaultType?: string;
}


const BookingForm: React.FC<Props> = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState('');


  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
    // reset when switching
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-gray-600 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Book Now</h2>

        <form className="space-y-2">
          <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
          <input type="tel" placeholder="Contact Number" className="w-full border p-2 rounded" />
          <input type="date" className="w-full border p-2 rounded" />
          <input type="number" placeholder="Number of Guests" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Venue title" className="w-full border p-2 rounded" />
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

          {/* Show event options
          {selectedService === 'event' && (
            <select
              className="w-full border p-2 rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select Event Type</option>
              {eventCards.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          )} */}

          {/* Show catering options */}
          {/* {selectedService === 'catering' && (
            <select
              className="w-full border p-2 rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select Catering Type</option>
              {cateringCards.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          )} */}

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default BookingForm;
