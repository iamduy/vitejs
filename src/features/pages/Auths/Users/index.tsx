import React from 'react';
import { IPage } from '@types';
const UsersManage: React.FC<IPage> = (props) => {
  return (
    <>
      <div>{props.name}</div>
    </>
  );
};
export default UsersManage;
