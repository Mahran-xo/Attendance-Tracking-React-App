import React from 'react';
import './index.css';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Homepage from './pages/homepage';
import AbsenceForm from './UI/Card/Form/AbsenceForm';
import Student from './pages/Student';
import AddStudents from './pages/AddStudents';

function App ()  {
  return ( 
    
    <Router>
  <Switch>

    <Route exact path="/">
    <Homepage/>
    </Route>

    <Route path="/Login">
    <Login/>
    </Route>

    <Route path="/SignUp">
    <SignUp/>
    </Route>

    <Route path="/AbsenceForm">
    <AbsenceForm/>
    </Route>   

    <Route path="/Student">
    <Student/>
    </Route>   
    
    <div>
      <AddStudents />
    </div>

  </Switch>
    </Router>
    

  

 
 

);
  }

export default App;
