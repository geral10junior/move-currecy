import React from 'react';
import logo from '../assets/logo.svg?react';

export const Footer = () => {
  return (
    <footer className="bg-azul-800 pt-16 pb-8 mt-30">
      <div className="container flex flex-col gap-30">
        <div className="flex justify-between">
          <img width="116" src={logo} alt="MoveCurrency" />
          <div className="flex gap-20">
            <div>
              <h3 className="text-white text-2xl font-bold">Contato</h3>
              <p className="text-gray-400 text-xl">
                movecurrecy@email.com <br /> +55 99 12345-6789
              </p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">Endereço</h3>
              <p className="text-gray-400 text-xl">
                Rua da Mata, 123 <br /> Floresta Nacional <br /> Rio de Janeiro,
                RJ
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400 text-xs">
            © 2024 Move Currency. Todos os direitos reservados.
          </p>
          <ul className="text-gray-400 flex gap-6 *:*:hover:text-azul-400 ">
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
