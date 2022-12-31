import React from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthForm from './AuthForm';
import SocialLogin from './SocialLogin';

type Props = {};

const AuthInputs = (props: Props) => {
  const modalState = useRecoilValue(authModalState);

  return (
    <>
      <AuthForm formType={modalState.view === 'signup' ? 'signup' : 'login'} />
    </>
  );
};

export default AuthInputs;
