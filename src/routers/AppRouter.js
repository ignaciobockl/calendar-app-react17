import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";


import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

import { startChecking } from '../actions/auth';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';



export const AppRouter = () => {
  
  const dispatch = useDispatch();

  const { checking, uid } = useSelector( state => state.auth );

  useEffect(() => {

    dispatch( startChecking() );

  }, [ dispatch ]);

  if ( checking ) {
    return ( <h5>Espere...</h5> );
  }
  
  return (
    <Router>
        <div>
            <Switch>

                <PublicRoute 
                  exact path='/login' 
                  component={ LoginScreen }
                  isAutenticated={ !!uid }
                />

                <PrivateRoute 
                  exact path='/' 
                  component={ CalendarScreen }
                  isAutenticated={ !!uid }
                />

                <Redirect to='/' />

            </Switch>
        </div>
    </Router>
  )
}
