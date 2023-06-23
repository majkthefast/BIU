import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from 'react-router-dom';

const Add = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));

  const result = x + y;
  return <p>Wynik: {isNaN(result) ? 'Nieprawidłowe argumenty' : result}</p>;
};

const Subtract = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));

  const result = x - y;
  return <p>Wynik: {isNaN(result) ? 'Nieprawidłowe argumenty' : result}</p>;
};

const Multiply = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));

  const result = x * y;
  return <p>Wynik: {isNaN(result) ? 'Nieprawidłowe argumenty' : result}</p>;
};

const Divide = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));

  const result = x / y;
  return <p>Wynik: {isNaN(result) ? 'Nieprawidłowe argumenty' : result}</p>;
};

const Calculator = () => {
  return (
    <div>
      <h1>Kalkulator</h1>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Subtract />} />
        <Route path="/mul" element={<Multiply />} />
        <Route path="/div" element={<Divide />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Calculator />
    </Router>
  );
};

export default App;
