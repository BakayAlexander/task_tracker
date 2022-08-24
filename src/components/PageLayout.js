import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PageLayout = ({ children }) => {
  // let token = useSelector(state => state.user.token);
  let localToken = localStorage.getItem('token');
  const navigate = useNavigate();
  // token = localToken;
  // const currentPath = useLocation();

  useEffect(() => {
    // console.log(token);
    if (!localToken) {
      navigate('/register');
      console.log('no token');
    }
  }, [localToken]);

  return (
    <>
      <div>Header</div>
      <main>{children}</main>
    </>
  );
};
export default PageLayout;
