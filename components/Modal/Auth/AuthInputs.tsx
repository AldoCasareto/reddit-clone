import React from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import Login from './Login';

type Props = {};

const AuthInputs = (props: Props) => {
  const modalState = useRecoilValue(authModalState);

  return (
    <div className='flex flex-cols items-center'>
      {modalState.view === 'login' && <Login />}
      {/* {modalState.view === 'signup' && <Signup />} */}
    </div>
  );
};

export default AuthInputs;
