import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { getErrorMessage } from '../../../utils/utils';

type FormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const setAuthModalState = useSetRecoilState(authModalState);

  const [signIn, signInResult, signInLoading, signInError] = useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    signIn(formData.email, formData.password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
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
      <p className='text-red-400 text-xs'>{getErrorMessage(error, signInError)}</p>
      <button
        type='submit'
        className='border p-3 bg-orange-600 text-white text-xs rounded-full my-2 w-full'
      >
        Sign In
      </button>
      <div className='mt-6'>
        <p className='text-xs'>
          Not a redditor yet?{' '}
          <span className='text-cyan-600 underline font-bold'>
            <span
              className='cursor-pointer'
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  view: 'signup',
                }))
              }
            >
              Log In
            </span>
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
