 


import React from 'react'
import setRecentHistry from "../Main/Chat"

const Histry = ({ recentHistry }) => {
  return (
    <div className="col-span-1 bg-zinc-800 h-screen text-amber-50 p-4">
      <h1 className="text-xl font-bold mb-4">Recent History</h1>

      <div className="space-y-2">
        {recentHistry?.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-700 p-3 rounded-xl hover:bg-zinc-600 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Histry;