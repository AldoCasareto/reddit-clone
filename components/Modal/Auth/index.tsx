import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthInputs from './AuthInputs';

type Props = {};

const AuthModal = (props: Props) => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const titles = {
    login: 'Log in',
    signup: 'Sign Up',
    resetPassword: 'Reset Password',
  };

  const ModalTitle = () => titles[modalState.view] || '';

  return (
    <>
      {modalState.open ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='py-20 px-10 max-w-lg l'>
              <div className='rounded-lg shadow-lg py-20 px-10 relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <button
                  className='text-gray-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150 absolute top-2 right-2 hover:text-gray-300'
                  type='button'
                  onClick={() => setModalState((prev) => ({ ...prev, open: false }))}
                >
                  X
                </button>
                <div className='flex items-start justify-between rounded-t'>
                  <h3 className='text-lg mb-1'>{ModalTitle()}</h3>
                </div>
                <div className=''>
                  <p className=' text-slate-500 text-xs leading-tight'>
                    By continuing, you agree are setting up a Reddit account and agree to our{' '}
                    <span className='text-cyan-600 '>User Agreement</span> and{' '}
                    <span className='text-cyan-600 '>Privacy Policy.</span>
                  </p>
                </div>
                <div className='flex items-center mt-8 border-slate-200 rounded-b'>
                  <button className='border p-2 text-sm border-gray-100 w-full rounded-full'>
                    <img
                      src='/images/googlelogo.png'
                      alt='google-logo'
                      className='w-4 fixed mr-3'
                    />
                    Login using Google
                  </button>
                </div>
                <div className='relative flex my-6 items-center'>
                  <div className='flex-grow border-t border-gray-200'></div>
                  <span className='flex-shrink mx-4 text-gray-400 text-xs font-bold'>OR</span>
                  <div className='flex-grow border-t border-gray-200'></div>
                </div>
                <AuthInputs />
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default AuthModal;
