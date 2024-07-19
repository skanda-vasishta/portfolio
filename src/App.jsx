// // src/App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import NoPage from './components/NoPage';

// function App() {
//   return (
//     <BrowserRouter basename={import.meta.env.BASE_URL}>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
