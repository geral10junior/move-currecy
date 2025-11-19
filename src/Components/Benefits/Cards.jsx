import React from 'react';

export const Card = ({ title, text, src }) => {
  return (
    <div className="bg-azul-800 snap-center transition-transform hover:-translate-y-4 min-w-[320px] py-10 px-12 rounded">
      <div className="flex gap-4 items-center mb-4">
        <div className="size-10 flex items-center justify-center bg-azul-900 rounded-full">
          <img width="20" src={src} alt="" />
        </div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 text-xl text-balance">{text}</p>
    </div>
  );
};
