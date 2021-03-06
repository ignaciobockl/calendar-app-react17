import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';


export const PrivateRoute = ({ 
    isAutenticated, 
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAutenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to='/login' /> )
            )}
        />
    )
}


PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}