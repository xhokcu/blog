import React from 'react';
import Profile from '../Profile/index';
import About from '../About/index';
import Experience from '../Experience/index';
import Writings from '../Writings/index';

function Content() {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="flex-col flex w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2 gap-6">
        <Profile />
        <About />
        <Experience />
        <Writings />
      </div>
    </div>
  );
}

export default Content;
