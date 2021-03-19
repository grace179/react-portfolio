import React from 'react';
import Login from '../../components/login/login';

const Home = ({authService}) => {
    return (
      <>
        <Login authService={authService}/>
      </>
    );
}

export default Home;