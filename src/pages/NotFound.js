import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation.js';

const NotFound = () => {
  const history = useHistory();
  const redirectDelay = 3000; // 3 secondes

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/');
    }, redirectDelay);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, [history, redirectDelay]);

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>You will be redirected to the homepage in {redirectDelay / 1000} seconds or <a href="/" onClick={() => history.push('/')}>click here</a> to return now.</p>
      <Navigation />  
    </div>
  );
};

export default NotFound;