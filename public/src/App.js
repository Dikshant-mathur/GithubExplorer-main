import React from "react";
import './App.css';
import UserPage from "./container/UserPage";
import { BrowserRouter as Router, Routes,Switch, Route,Navigate } from "react-router-dom"
// import { Navigate } from "react-router-dom";
function App() {
  return (
     <Router>
     <Routes>
      <Route path= "/:id" component={UserPage}/>
      {/* <Route path=":id" element={<Navigate replace to="/Dikshant-mathur"/>} /> */}
        
      {/* <Redirect to ={'/akkySrivastava'}/> */}
     </Routes>

     </Router>
    
  
  );
}
export default App;
