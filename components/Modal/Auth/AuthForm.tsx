import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type Props = {
  formType: 'login' | 'signup';
};

const AuthForm = (props: Props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: props.formType === 'signup' ? '' : undefined,
    newsletter: props.formType === 'signup' ? true : undefined,
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.formType === 'signup' && formData.password !== formData.repeatPassword) return;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <form className='w-full' onSubmit={handleFormSubmit}>
        <input
          type='text'
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
        {props.formType === 'signup' && (
          <>
            <input
              type='password'
              className='border p-3 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
              placeholder='Repeat Password'
              value={formData.repeatPassword}
              name='repeatPassword'
              onChange={handleInputChange}
            />
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
          {props.formType === 'login' ? 'Log In' : 'Sign Up'}
        </button>
        <div className='mt-6'>
          <p className='text-xs'>
            {props.formType === 'login' ? 'Not a redditor yet? ' : 'Already a redditor? '}
            <span className='text-cyan-600 underline font-bold'>
              <span
                className='cursor-pointer'
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    view: props.formType === 'login' ? 'signup' : 'login',
                  }))
                }
              >
                {props.formType === 'login' ? 'Sign Up' : 'Log In'}
              </span>
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
