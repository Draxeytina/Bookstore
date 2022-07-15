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
        path="/Books"
        element={(
          <Books />
      )}
      />
      <Route
        index
        element={<Books />}
      />
      <Route
        path="*"
        element={
          <div><h2>404 Page not found</h2></div>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
