import React from 'react';
import { IPage } from '@types';
const HomePage: React.FC<IPage> = (props) => {
  return (
    <>
      <div>{props.name}</div>
    </>
  );
};
export default HomePage;
