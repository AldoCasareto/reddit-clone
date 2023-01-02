import React from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import SignInForm from './SignInForm';
import CreateUserForm from './CreateUserForm';

type Props = {};

const AuthInputs = (props: Props) => {
  const modalState = useRecoilValue(authModalState);

  return modalState.view === 'signup' ? <CreateUserForm /> : <SignInForm />;
};

export default AuthInputs;
