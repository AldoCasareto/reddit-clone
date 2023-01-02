import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { checkMatchingPasswords, isValidEmail } from '../../../utils/utils';
import { FIREBASE_ERRORS } from '../../../firebase/errors';

type FormProps = {
  formType: 'login' | 'signup';
};

const AuthForm = ({ formType }: FormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: formType === 'signup' ? '' : '',
    newsletter: formType === 'signup' ? true : undefined,
  });
  const setAuthModalState = useSetRecoilState(authModalState);
  const [error, setError] = useState('');

  const [createUser, createUserResult, createUserLoading, createUserError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signIn, signInResult, signInLoading, signInError] = useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!isValidEmail(formData.email)) return setError('emaail is not valid');

    if (
      formType === 'signup' &&
      !checkMatchingPasswords(formData.password, formData.repeatPassword)
    ) {
      return setError('password doest not match');
    }

    if (formType === 'login') {
      signIn(formData.email, formData.password);
    } else if (formType === 'signup') {
      createUser(formData.email, formData.password);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  console.log(`foo = `, signInError);

  const getErrorMessage = () => {
    if (formType === 'signup') {
      return (
        error ||
        FIREBASE_ERRORS[createUserError?.message as keyof typeof FIREBASE_ERRORS] ||
        createUserError?.message
      );
    }
    return (
      FIREBASE_ERRORS[signInError?.message as keyof typeof FIREBASE_ERRORS] || signInError?.message
    );
  };

  {
    formType === 'login' && <p className='text-red-400 text-xs'>{getErrorMessage()}</p>;
  }

  return (
    <>
      <form className='w-full' onSubmit={handleFormSubmit}>
        <input
          type='email'
          className='border p-3 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
          placeholder='Username'
          value={formData.email}
          name='email'
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='border p-3 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
          placeholder='Password'
          value={formData.password}
          name='password'
          onChange={handleInputChange}
        />
        {formType === 'signup' && (
          <>
            <input
              type='password'
              className='border p-3 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
              placeholder='Repeat Password'
              value={formData.repeatPassword}
              name='repeatPassword'
              onChange={handleInputChange}
            />
            <p className='text-red-400 text-xs'>{getErrorMessage()}</p>

            <div className='flex my-4 text-xs space-x-2'>
              <input onChange={handleInputChange} type='checkbox' />
              <p>I agree to get emails about cool stuff on Reddit</p>
            </div>
          </>
        )}
        <button
          type='submit'
          className='border text-white p-3 hover:bg-orange-700 text-xs bg-orange-600 w-full rounded-full'
        >
          {formType === 'login' ? 'Log In' : 'Sign Up'}
        </button>
        <div className='mt-6'>
          <p className='text-xs'>
            {formType === 'login' ? 'Not a redditor yet? ' : 'Already a redditor? '}
            <span className='text-cyan-600 underline font-bold'>
              <span
                className='cursor-pointer'
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    view: formType === 'login' ? 'signup' : 'login',
                  }))
                }
              >
                {formType === 'login' ? 'Sign Up' : 'Log In'}
              </span>
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
