import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

type Props = {};

const SocialLogin = (props: Props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  console.log(`foo = `, user);
  return (
    <div className='flex items-center mt-8 border-slate-200 rounded-b'>
      <button
        onClick={() => signInWithGoogle()}
        className='border p-2 text-sm border-gray-100 w-full rounded-full'
      >
        <img src='/images/googlelogo.png' alt='google-logo' className='w-4 fixed mr-3' />
        Login using Google
      </button>
    </div>
  );
};

export default SocialLogin;
