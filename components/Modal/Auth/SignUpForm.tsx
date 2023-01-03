import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { checkMatchingPasswords, getErrorMessage, isValidEmail } from '../../../utils/utils';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
  newsletter: boolean;
};

const CreateUser = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    repeatPassword: '',
    newsletter: true,
  });
  const [error, setError] = useState('');
  const setAuthModalState = useSetRecoilState(authModalState);

  const [createUser, createUserResult, createUserLoading, createUserError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!isValidEmail(formData.email)) return setError('emaail is not valid');

    if (!checkMatchingPasswords(formData.password, formData.repeatPassword)) {
      return setError('password doest not match');
    }

    createUser(formData.email, formData.password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
      <input
        type='password'
        className='border p-3 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
        placeholder='Repeat Password'
        value={formData.repeatPassword}
        name='repeatPassword'
        onChange={handleInputChange}
      />
      <p className='text-red-400 text-xs'>{getErrorMessage(error, createUserError)}</p>
      <div className='flex my-4 text-xs space-x-2'>
        <input onChange={handleInputChange} type='checkbox' />
        <p>I agree to get emails about cool stuff on Reddit</p>
      </div>
      <button
        type='submit'
        className='border p-3 text-white bg-orange-600 text-xs rounded-full my-2 w-full'
      >
        Sign Up
      </button>
      <div className='mt-6'>
        <p className='text-xs'>
          Already a redditor?{' '}
          <span
            className='text-cyan-600 underline font-bold cursor-pointer'
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: 'login',
              }))
            }
          >
            Log in
          </span>
        </p>
      </div>
    </form>
  );
};

export default CreateUser;
