import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const PageLayout = ({ children }) => {
  let localToken = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localToken) {
      navigate('/register');
    }
  }, [localToken]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default PageLayout;
