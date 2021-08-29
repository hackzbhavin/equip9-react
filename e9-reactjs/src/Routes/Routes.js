import React from 'react'
import {BrowserRouter as Router, Switch, Route}  from  'react-router-dom';

//  imports
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import RegisterProcess from '../Pages/RegisterProcess';


const Routes = ()=> {
  return (
    <div>
      <Router>
        <Switch>
          <Route  path='/' exact component={Home} />
          <Route  path='/register' exact component={Register} />
          <Route  path='/login' exact component={Login} />
          <Route  path='/registerProcess' exact component={RegisterProcess} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;