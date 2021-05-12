/* eslint-disable no-constant-condition */
/* eslint-disable react/display-name */
import React from 'react';
import { Route, RedirectProps } from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import Register from '../views/pages/Register';
import SearchUser from '../views/pages/SearchUser';

interface ReactPropsDefault extends RedirectProps {
  component?: React.ComponentType | any;
}

export const PrivateRoute: React.FC<ReactPropsDefault> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};
export const routes = {
  protected: [
    {
      title: 'Cadastro de Usuário',
      path: '/',
      icon: <FontAwesomeIcon icon={faUser} />,
      component: Register,
    },
    {
      title: 'Pesquisar',
      path: '/pesquisar',
      icon: <FontAwesomeIcon icon={faSearch} />,
      component: SearchUser,
    },
  ],
};
