import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Home from './components/pages/Home'
import Quiz from './components/pages/Quiz';


const App = () => {
  return (
    <Router>
     
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         <Route exact path="/quiz" element={<Quiz/>}/>
        </Routes>
   
    </Router>
  );
}

export default App;