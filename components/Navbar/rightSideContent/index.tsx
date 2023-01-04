import { User } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import Modal from '../../Modal';
import AuthButtons from './AuthButtons';
import Icons from './Icons';
import UserDropDown from './User';

type Props = {
  user?: User | null;
};

const RightSideNav = ({ user }: Props) => {
  return (
    <>
      <Modal />
      <div className='flex space-x-2 md:space-x-4'>
        {user ? <Icons /> : <AuthButtons />}
        <UserDropDown user={user} />
      </div>
    </>
  );
};

export default RightSideNav;
