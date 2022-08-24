import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
    </>
  );
};
export default PageLayout;
