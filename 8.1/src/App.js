import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Strona główna</h1>
    <p>Witaj na stronie głównej!</p>
  </div>
);

const About = () => (
  <div>
    <h1>O nas</h1>
    <p>Tutaj znajdziesz informacje.</p>
  </div>
);

const Services = () => (
  <div>
    <h1>Usługi</h1>
    <p>Oferujemy szeroki zakres usług.</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Kontakt</h1>
    <p>Skontaktuj się z nami:</p>
    <ul>
      <li>
        <Link to="us">USA</Link>
      </li>
      <li>
        <Link to="pl">Polska</Link>
      </li>
      <li>
        <Link to="de">Niemcy</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

const NotFound = ({ location }) => (
  <div>
    <h1>Nie znaleziono elementu</h1>
    <p>Nie znaleziono strony o adresie: {location.pathname}</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/services">Usługi</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/us" element={<p>Kontakt w USA</p>} />
        <Route path="/contact/pl" element={<p>Kontakt w Polsce</p>} />
        <Route path="/contact/de" element={<p>Kontakt w Niemczech</p>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
