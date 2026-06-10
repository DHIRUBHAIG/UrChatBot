 


// import React from 'react'




// const Histry = ({ recentHistry, setRecentHistry }) => {

//   const clearHistory = () => {
//     localStorage.removeItem("Histry");
//     setRecentHistry([]);
//   };

//   return (
//     <div className="col-span-1 bg-zinc-800 h-screen text-white p-4">
//       <div className="flex justify-between mb-4">
//         <h1 className="text-xl font-bold">
//           Recent History
//         </h1>

//         <button
//           onClick={clearHistory}
//           className="bg-red-600 px-3 py-1 rounded"
//         >
//           Clear
//         </button>
//       </div>

//       {recentHistry.map((item, index) => (
//         <div
//           key={index}
//           className="bg-zinc-700 p-3 rounded-xl mb-2"
//         >
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Histry;

import React from "react";
import { Trash2, MessageSquare } from "lucide-react";

const Histry = ({ recentHistry, setRecentHistry }) => {
  const clearHistory = () => {
    localStorage.removeItem("Histry");
    setRecentHistry([]);
  };

  return (
    <div className="col-span-1 h-screen bg-[#171717] border-r border-zinc-800 text-white flex flex-col">

      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">
          Recent Chats
        </h1>

        <button
          onClick={clearHistory}
          className="p-2 rounded-lg hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2 scrollbar-thin scrollbar-thumb-zinc-700">

        {recentHistry.length === 0 ? (
          <div className="text-center mt-10 text-zinc-500 text-sm">
            No recent chats
          </div>
        ) : (
          recentHistry.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition duration-200"
            >
              <div className="bg-zinc-700 p-2 rounded-lg">
                <MessageSquare size={16} />
              </div>

              <p className="text-sm text-zinc-300 truncate group-hover:text-white transition">
                {item}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-4">
        <p className="text-xs text-zinc-500 text-center">
          Dhiru Dynamo AI
        </p>
      </div>
    </div>
  );
};

export default Histry;