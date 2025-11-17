import React, { useEffect } from 'react';
import transfer from '../assets/transfer.svg?react';
import element from '../assets/element.svg?react';

async function fetchBitcoin(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.btc;
}

export const Home = () => {
  const [input, setInput] = React.useState('');
  const [prices, setPrices] = React.useState({});
  const [selectedCurrency, setSelectedCurreny] = React.useState('brl');
  const [btcInput, setBtcInput] = React.useState('');

  const url =
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json';

  const currencyCodes = Object.keys(prices);
  const btcConversionRate = prices[selectedCurrency] || 0;
  const donationAmount = Number(input) || 0;
  const btcValue = donationAmount * btcConversionRate;

  useEffect(() => {
    const loadPrices = async () => {
      try {
        const data = await fetchBitcoin(url);
        setPrices(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    loadPrices();
  }, []);

  useEffect(() => {
    const result = donationAmount / btcConversionRate;
    let calculatedValue = '0';
    if (isFinite(result) && !isNaN(result)) {
      calculatedValue = result.toFixed(8);
    }
    setBtcInput(calculatedValue);
  }, [donationAmount, btcConversionRate]);

  function handleChange({ target }) {
    const value = target.value;
    const numValue = Number(value);
    if (numValue < 0) {
      setInput('0');
      return;
    }
    setInput(value);
  }

  function handleCurrencyChange({ target }) {
    setSelectedCurreny(target.value);
  }

  return (
    <div className="max-w-4xl mx-auto relative">
      <h1 className="mt-16 uppercase text-5xl text-center text-balance text-azul-200 font-bold">
        Faça sua Doação de maneira rápida e fácil.
      </h1>
      <p className="mt-4 text-center text-gray-400 text-balance">
        Aqui você pode realizar doações que estarão atreladas a um índice
        poderoso que é o Bitcoin.
      </p>
      <div className="flex max-lg:flex-col gap-4 justify-center items-center mt-12 relative z-10 ">
        <div className="relative z-50">
          <div>
            <select
              name="currency"
              id="currency"
              className="text-white"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
            >
              {currencyCodes.map((code) => (
                <option
                  className="text-black bg-gray-200"
                  value={code}
                  key={code}
                >
                  {code.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="number"
              name="currency"
              onChange={handleChange}
              value={input}
              className="bg-gray-200 focus:bg-gray-50 p-2 rounded outline-none ring focus:ring-azul-700 shadow shadow-azul-700"
            />
          </div>
        </div>
        <img
          src={transfer}
          className="max-lg:rotate-90 transition  z-50 max-w-10"
          alt=""
        />
        <div className="z-50">
          <label className="text-white" htmlFor="btc">
            BTC
          </label>
          <div>
            <input
              disabled
              type="number"
              name="currency"
              id="btc"
              className="bg-gray-300  p-2 rounded outline-none ring focus:ring-azul-700 shadow shadow-azul-700"
              value={btcInput}
            />
          </div>
        </div>

        <img className="absolute mr-220 mt-80" src={element} alt="" />
        <img className="absolute ml-220 mt-80" src={element} alt="" />
      </div>
    </div>
  );
};
export default Home;
