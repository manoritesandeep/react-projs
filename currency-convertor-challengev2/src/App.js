import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getRates() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        // console.log(data.rates[toCur]);
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }

      // If from currency equals to currency set the amount to input amount.
      if (fromCur === toCur) return setConverted(amount);
      getRates();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <SelectCurrency
        value={fromCur}
        onChange={setFromCur}
        disabled={isLoading}
      />
      <SelectCurrency value={toCur} onChange={setToCur} disabled={isLoading} />
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}

function SelectCurrency({ value, onChange, disabled }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
