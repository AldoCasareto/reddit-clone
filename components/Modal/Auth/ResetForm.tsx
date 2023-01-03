import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { getErrorMessage } from '../../../utils/utils';

const ResetForm = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

  console.log(`sending = `, sending);
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setError('');
    setSuccess(false);
    await sendPasswordResetEmail(email);
    if (resetError) return;
    setSuccess(true);
  };

  return (
    <div>
      <form className='w-full mt-4' onSubmit={handleFormSubmit}>
        <input
          type='email'
          className='border p-3 bg-gray-100 text-gray-400 text-xs border-gray-100 rounded-full my-2 w-full'
          placeholder='email'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />

        {(error || resetError) && (
          <p className='text-red-400 text-xs'>{getErrorMessage(error, resetError)}</p>
        )}

        {!resetError && success && <p className='text-green-500 text-xs'>Check your email!</p>}
        <button
          type='submit'
          className='border p-3 bg-orange-600 text-white text-xs rounded-full my-2 w-full'
        >
          Email Me
        </button>
      </form>
      <p className='text-xs mt-2'>
        Don't have an email or need assistance logging in?{' '}
        <span className='cursor-pointer text-cyan-600 underline font-bold'>Get Help</span>
      </p>
      <div className='text-xs mt-4'>
        <span
          className='cursor-pointer text-cyan-600 underline font-bold'
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'signup',
            }))
          }
        >
          Sign up
        </span>
        <span
          className='text-cyan-600 underline font-bold cursor-pointer ml-2'
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }))
          }
        >
          Log in
        </span>
      </div>
    </div>
  );
};

export default ResetForm;
