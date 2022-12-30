import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type Props = {};

const Login = (props: Props) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <form className='w-full' onSubmit={handleLoginForm}>
      <input
        type='text'
        className='border p-2 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
        placeholder='Username'
        value={loginForm.email}
        name='email'
        onChange={handleInputChange}
      />
      <input
        type='password'
        className='border p-2 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
        placeholder='Password'
        value={loginForm.password}
        name='password'
        onChange={handleInputChange}
      />
      <div className='my-4'>
        <p className='text-xs'>
          Forget your <span className='text-cyan-600 underline font-bold'>username</span> or{' '}
          <span className='text-cyan-600 underline font-bold'>password</span>?
        </p>
      </div>
      <button
        type='submit'
        className='border text-white p-2 hover:bg-orange-700 text-xs bg-orange-600 w-full rounded-full'
      >
        Log in
      </button>
      <div className='mt-6'>
        <p className='text-xs'>
          New to Reddit?{' '}
          <span className='text-cyan-600 underline font-bold'>
            <span
              className='cursor-pointer'
              onClick={() => setAuthModalState((prev) => ({ ...prev, view: 'signup' }))}
            >
              Sign-up
            </span>
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
