import React from 'react';
import abrigo from '../assets/abrigo.png';
import cancer from '../assets/cancer.png';
import hospital from '../assets/hospital.png';

export const Projects = () => {
  return (
    <section className="md:mt-[220px] mt-[120px] container">
      <h1 className="mb-12 font-bold text-white text-2xl md:text-3xl max-w-[20ch] text-balance">
        Contruir projetos revolucionários é a nossa paixão.
      </h1>

      <div className="grid *:rounded overflow-hidden max-md:grid-cols-1 grid-cols-3 content-center gap-4">
        <div className="group relative overflow-hidden  md:col-span-2">
          <img
            src={abrigo}
            className="size-full object-cover group-hover:scale-110 transition-transform"
            alt="Abrigo de cachorros de rua"
          />
          <div className="absolute inset-0 from-azul-800/80 bg-linear-to-t opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="flex justify-center flex-col gap-2 bg-azul-800 rounded text-white p-8 max-md:items-center md:col-span-1">
          <h2 className="font-bold max-md:text-center  text-xl md:text-2xl max-w-[15ch]">
            Criação de abrigo para cães de rua
          </h2>
          <p className="text-lg md:text-xl max-md:text-center text-gray-400 mb-6">
            Abrigo JP, PB
          </p>
          <button className="flex gap-3 place-self-start max-md:place-self-center btn">
            Saiba Mais <span>►</span>
          </button>
        </div>

        <div className="flex justify-center flex-col gap-2 bg-azul-800 rounded text-white p-8 max-md:items-center md:col-span-1 max-md:order-2">
          <h2 className="font-bold max-md:text-center text-xl md:text-2xl max-w-[15ch]">
            Construção de clínica contra câncer
          </h2>
          <p className="text-lg md:text-xl  max-md:text-center   text-gray-400 mb-6">
            Clínica São Miguel, AM
          </p>
          <button className="flex gap-3 place-self-start max-md:place-self-center btn">
            Saiba Mais <span>►</span>
          </button>
        </div>

        <div className="group relative overflow-hidden md:col-span-2 max-md:order-1">
          <img
            src={cancer}
            className="size-full object-cover group-hover:scale-110 transition-transform"
            alt="Clínica contra câncer"
          />
          <div className="absolute inset-0 from-azul-800/80 bg-linear-to-t opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="group relative overflow-hidden md:col-span-2 max-md:order-3">
          <img
            src={hospital}
            className="size-full object-cover group-hover:scale-110 transition-transform"
            alt="Reforma de hospital"
          />
          <div className="absolute inset-0 from-azul-800/80 bg-linear-to-t opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="flex justify-center flex-col gap-2 bg-azul-800 rounded text-white p-8 max-md:items-center md:col-span-1 max-md:order-4">
          <h2 className="font-bold max-md:text-center  text-xl md:text-2xl max-w-[15ch]">
            Reforma de hospital
          </h2>
          <p className="text-lg md:text-xl  max-md:text-center text-gray-400 mb-6">
            Hospital Caravan, SP
          </p>
          <button className="flex gap-3 place-self-start max-md:place-self-center btn">
            Saiba Mais <span>►</span>
          </button>
        </div>
      </div>
    </section>
  );
};
