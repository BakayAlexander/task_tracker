import React from 'react';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-[50px]">404</h1>
      <p className="text-[40px] mt-5">This page does not exist</p>
      <a href="/" className="link mt-10">
        Back
      </a>
    </section>
  );
};

export default NotFound;
