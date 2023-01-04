import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type Props = {};

const AuthButtons = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <div className='text-xs hidden md:block'>
      <button
        onClick={() => setAuthModalState({ open: true, view: 'login' })}
        className='rounded-xl text-blue-600 border border-blue-600 px-2 py-1 mx-1 hover:text-blue-300'
      >
        Log In
      </button>
      <button
        onClick={() => setAuthModalState({ open: true, view: 'signup' })}
        className='rounded-xl text-white bg-blue-600 px-2 py-1 hover:bg-blue-400'
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;
