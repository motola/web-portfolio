import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import './App.scss';



function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
