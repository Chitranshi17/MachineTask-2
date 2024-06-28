import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="xl:w-full xl:h-[13vh] md:w-full md:h-[13vh] lg:w-full lg:h-[13vh] sm:w-full sm:h-[13vh] xs:w-full xs:h-[13vh] bg-blue-800 flex items-center justify-start">
      <Link to={"/"}>
        <h2 className="text-5xl font-bold text-white px-4">CardDisplay</h2>
      </Link>
    </div>
  );
}

export default Navbar