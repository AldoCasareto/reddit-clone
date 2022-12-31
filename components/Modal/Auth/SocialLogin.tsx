import React from 'react';

type Props = {};

const SocialLogin = (props: Props) => {
  return (
    <div className='flex items-center mt-8 border-slate-200 rounded-b'>
      <button className='border p-2 text-sm border-gray-100 w-full rounded-full'>
        <img src='/images/googlelogo.png' alt='google-logo' className='w-4 fixed mr-3' />
        Login using Google
      </button>
    </div>
  );
};

export default SocialLogin;
