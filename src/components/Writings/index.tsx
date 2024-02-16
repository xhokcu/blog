import React from 'react';

function Writings() {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="font-sans text-lg font-bold text-gray-200">Writings</p>
      <div className="grid grid-cols-2 gap-6">
        <div className=" border border-spacing-1 border-gray-800 gap-4 grid grid-span-1 p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 rounded-lg shadow-md hover:shadow-lg ">
          <a href="https://medium.com/@helinokcu/first-look-at-typescript-89e389b0fc0f">
            <p className="text-gray-200 font-sans text-md font-semibold ">
              First Look at Typescript
            </p>
            <p className="text-gray-400 font-sans text-sm ">December, 2023</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Writings;
