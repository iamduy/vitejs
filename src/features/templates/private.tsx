import React from 'react';
const PrivateLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PrivateLayout;
