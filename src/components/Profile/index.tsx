import React from 'react';
import profile from './me.png';

function Profile() {
  return (
    <div className="flex flex-row items-center gap-6">
      <img alt="profilepic" src={profile} width="100" />
      <div className=" flex flex-col gap-2">
        <p className="text-3xl font-sans font-bold text-gray-200">
          Hi, I'm Helin.
        </p>
        <p className="text-2xl font-sans text-gray-400 font-bold">
          A developer who dabbles in design on the side.
        </p>
      </div>
    </div>
  );
}

export default Profile;
