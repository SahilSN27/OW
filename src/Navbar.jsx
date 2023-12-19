

import React from 'react';


const Navbar = (setSearch,size) => {
  return (
    <nav className="bg-gray-800 p-4 h-72 bg-flower" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Pixabay</div>
        <div className="flex space-x-4 text-white">
          <a href="#" className="hover:text-gray-300">Explore</a>
          <a href="#" className="hover:text-gray-300">Log in</a>
          <a href="#" className="hover:text-gray-300">Join</a>
          <a href="#" className="hover:text-gray-300">Upload</a>
          

          {/* { background-image: url('https://cdn.pixabay.com/photo/2023/11/15/16/23/hydrangea-8390432_1280.jpg')} */}
        </div>
      </div>
      <div className="my-5 flex justify-center items-center mt-10 rounded-xl  ">
        
                    <input className="border-2 border-black w-80 h-10" type="search" placeholder="Search Pic's" onChange={(e)=>setSearch(e.target.value)} />
          </div>
    </nav>
  );
};

export default Navbar;
