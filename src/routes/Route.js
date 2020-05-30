import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({

    component: Component,
    isPrivate,
    ...rest

}) {

    const signedIn = false;


    //route is private and user not logged in

    if (isPrivate && !signedIn) {
        return <Redirect to="/" />
    }


    //Route is public and user is logged in:
    if (!isPrivate && signedIn) {
        return <Redirect to="/Login" />
    }

    //outras situaçoes:
    return <Route {...rest} component={Component} /> //este component aqui é aquele q recebermos como parametro

}

RouteWrapper.proprTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired

}

RouteWrapper.defaultProps = {
    isPrivate: false
}