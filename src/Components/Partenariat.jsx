import React from 'react';
import dogs from '../assets/parceiros/dogs.svg?react';
import wildbeast from '../assets/parceiros/wildbeast.svg?react';
import lescone from '../assets/parceiros/lescone.svg?react';
import surfbot from '../assets/parceiros/surfbot.svg?react';
import caravan from '../assets/parceiros/caravan.svg?react';

export const Partenariat = () => {
  return (
    <section id="parceiros" className="container">
      <h1 className="mt-20 mb-12 text-center font-bold text-white text-2xl md:text-3xl text-balance">
        Todo grande projeto gera uma grande parceria.
      </h1>
      <ul className="flex justify-center items-center max-md:divide-y-2 md:ga-8 py-4 md:py-8 md:border-t-2 md:border-b-2 border-azul-800 divide-azul-800 flex-col *:p-4 *:*::max-h-6 md:flex-row">
        <li>
          <img src={dogs} alt="" />
        </li>
        <li>
          <img src={caravan} alt="" />
        </li>
        <li>
          <img src={wildbeast} alt="" />
        </li>
        <li>
          <img src={surfbot} alt="" />
        </li>
        <li>
          <img src={lescone} alt="" />
        </li>
      </ul>
    </section>
  );
};
