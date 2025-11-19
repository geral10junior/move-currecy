import React from 'react';
import { Card } from './Cards';
import titulo from '../../assets/icons/titulo.svg?react';
import parceria from '../../assets/icons/parceria.svg?react';
import presente from '../../assets/icons/presente.svg?react';

export const Benefits = () => {
  return (
    <section id="beneficios" className="container">
      <h1 className="font-main  mt-20 mb-12 font-bold text-white text-2xl md:text-3xl text-balance">
        Benefícios de ser um doador.
      </h1>
      <div className="flex font-text gap-4 sm:gap-8 snap-x snap-mandatory overflow-x-auto">
        <Card
          title="Título Move"
          text="Com o título Move, você tem preferências em filas, além de meia entrada em festividades."
          src={titulo}
        />
        <Card
          title="Parcerias"
          text="Descontos e cashback em lojas parceiras, além de uma recarga grátis mensal."
          src={parceria}
        />
        <Card
          title="Sorteios Diários"
          text="Sorteios de camisetas, adesivos, bottons, canecas ou chaveiros com a marca da causa."
          src={presente}
        />
      </div>
    </section>
  );
};
