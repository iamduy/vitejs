import React from 'react';
const PrivateLayout: React.FC = ({ children }: any) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PrivateLayout;
