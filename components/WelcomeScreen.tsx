import React from 'react';

const WelcomeScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-900 text-white animate-fadeInAndOut">
      <h2 className="text-5xl font-thin tracking-wider">
        Welcome by <span className="font-normal text-cyan-400">System X80</span>
      </h2>
       <style>{`
        @keyframes fadeInAndOut {
          0%, 100% { opacity: 0; }
          20%, 80% { opacity: 1; }
        }
       .animate-fadeInAndOut {
         animation: fadeInAndOut 2.5s ease-in-out forwards;
       }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;