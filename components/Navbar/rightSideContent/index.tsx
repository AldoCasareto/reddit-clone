import React from 'react';
import AuthModal from '../../Modal/Auth';
import AuthButtons from './AuthButtons';
import Icons from './Icons';
import User from './User';

type Props = {};

const RightSideNav = (props: Props) => {
  return (
    <>
      <AuthModal />
      <AuthButtons />
      <User />
    </>
  );
};

export default RightSideNav;
