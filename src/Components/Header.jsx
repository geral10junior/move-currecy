import logo from '../assets/logo.svg?react';

function Header() {
  return (
    <header className="container pt-12 flex justify-between items-center">
      <img width="137" height="66" src={logo} alt="" />
      <ul className="flex text-white gap-8">
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#beneficios">Benefícios</a>
        </li>
        <li>
          <a href="#parceiros">Parceiros</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
