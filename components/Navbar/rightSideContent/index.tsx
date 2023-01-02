import React from 'react';
import Modal from '../../Modal';
import AuthButtons from './AuthButtons';
import User from './User';

type Props = {};

const RightSideNav = (props: Props) => {
  return (
    <>
      <Modal />
      <AuthButtons />
      <User />
    </>
  );
};

export default RightSideNav;
