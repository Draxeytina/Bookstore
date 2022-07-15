import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import NavSection from './components/NavSection';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <NavSection />
    <Routes>
      <Route
        path="/Categories"
        element={(
          <div className="App">
            <Categories />
          </div>
      )}
      />
      <Route
        path="/"
        element={(
          <Books />
      )}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
