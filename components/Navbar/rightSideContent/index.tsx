import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import Modal from '../../Modal';
import AuthButtons from './AuthButtons';
import User from './User';

type Props = {
  user: any;
};

const RightSideNav = ({ user }: Props) => {
  console.log(`user = `, user?.displayName);
  return (
    <>
      <Modal />
      {user ? <div>hello {user.displayName?.split(' ')[0]}</div> : <AuthButtons />}

      <User />
    </>
  );
};

export default RightSideNav;
