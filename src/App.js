import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Characters from './component/Characters';
import Header from './component/Header';
import Loader from './component/Loader';
import Planets from './component/Planets';




function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 3000);
  }, [])

  return (
    <>
{
  load ?

    <Loader/>

    :
    <Router>

        <div className="px-5">
          <h1 className="fw-bold text-dark pt-5">Spacious</h1>
          

          <Header />
          <Routes>
            <Route exact path='/planet' element={<Planets />} />
            <Route exact path='/character' element={<Characters />} />
          </Routes>
        </div>

        {}

    </Router>
}


</>
  );
}

export default App;