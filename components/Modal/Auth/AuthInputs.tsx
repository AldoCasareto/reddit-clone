import React from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ResetForm from './ResetForm';

const AuthInputs = () => {
  const modalState = useRecoilValue(authModalState);

  const modalViews = {
    login: SignInForm,
    signup: SignUpForm,
    resetPassword: ResetForm,
  };

  const ModalView = modalViews[modalState.view];

  return <ModalView />;
};

export default AuthInputs;
