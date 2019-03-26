import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

const Layout = () => {
    return (
        <Switch>
            { routes.map( (route, index) => <Route key={ index } { ...route } /> ) }
        </Switch>
    );
};

export default Layout;
