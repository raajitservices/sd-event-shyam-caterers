import React from 'react';
interface CardProps {
  title: string;
  image: string;
  price?: string;
  location?: string;
  includes?: string[]; // ✅ Mark as optional
  buttonText?: string;
  children?: React.ReactNode;
}


const Card: React.FC<CardProps> = ({
  title,
  includes = [],
  image,
  price,
  location,
  buttonText = "Book Now",
  children,
  

}) => {
  return (
    <div className="overflow-hidden transition duration-300 transform bg-white border shadow-lg rounded-2xl hover:scale-105">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-indigo-700">{title}</h3>
        {location && <p className="text-sm text-gray-500">📍 {location}</p>}

       {includes?.length > 0 && (
  <div className="space-y-1">
    {includes.map((item, index) => (
      <p key={index} className="text-sm text-gray-600">• {item}</p>
    ))}
  </div>
)}
        {/* Tags */}      
 
        {/* Custom button or children */}
        {children ? (
          <div className="mt-4">{children}</div>
        ) : (
          <button className="">
           
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
